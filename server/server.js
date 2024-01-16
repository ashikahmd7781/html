const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');
const fs = require('fs');
const queryString = require('querystring');
const { error } = require('console');
const {MongoClient,ObjectId}= require('mongodb');

const client = new MongoClient("mongodb://127.0.0.1:27017");

const server = http.createServer( async(req, res) => {

 
  const db =  client.db ('ums12');
  const collection = db.collection("users");
 
 
  const reqUrl = req.url;
  console.log("reqUrl : ",reqUrl);


  const parsedUrl = url.parse(reqUrl);
  console.log("parsedUrl : ",parsedUrl);


if(parsedUrl.pathname === '/'){
  res.writeHead(200,{'content-Type' : 'text/html'});
  res.end(fs.readFileSync('../client/index.html'));
}else if (parsedUrl.pathname==='/add_list.html'){
  res.writeHead(200,{'content-Type' : 'text/html'});
  res.end(fs.readFileSync('../client/add_list.html'));
}else if(parsedUrl.pathname ==='/view_list.html'){
  res.writeHead(200,{'content-Type' : 'text/html'});
  res.end(fs.readFileSync('../client/view_list.html'));
}else if(parsedUrl.pathname ==='/style.css'){
  res.writeHead(200,{"Content-Type":'text/css'});
  res.end(fs.readFileSync('../client/style.css'));
}else if(parsedUrl.pathname === '/script.js'){
  res.writeHead(200,{"Content-Type":'text/javascript'});
  res.end(fs.readFileSync('../client/script.js'));
}


if(req.method === 'POST' && parsedUrl.pathname === '/submit'){
  let body='';


  req.on('data', (chunk)=> {
    console.log("chunks : ",chunk);
    console.log("chunk.toString() :", chunk.toString());
    body = body + chunk.toString();
    
  });


req.on('end',async()=> {
  console.log("body :",body);
  const formData = queryString.parse(body);
  console.log('forData :', formData);



console.log(`date_time : ${formData.date_time},
top_priorities : ${formData.top_priorities},
tasks : ${formData.tasks},
daily_schedule : ${formData.daily_schedule},
password : ${formData.for_tomorrow},
`);


await collection.insertOne(formData)
.then((message)=> {
  console.log("Document inserted succesfully",message);

})
.catch((error)=>{
  console.log("database iserted error :",error.message?error.message:error)
})
});

res.writeHead(200,{'Content-Type' : 'text/plain'});
res.end("form data submitted successfully!");

}

if (req.method === 'GET' && parsedUrl.pathname === '/getData'){
  const formData = collection.find();
  console.log("formDate :" , formData);

  const formDataArr = await formData.toArray();
  console.log("formDataArr:", formDataArr);

  let jsonFormData = JSON.stringify(formDataArr);
  console.log("jsonFormData :", jsonFormData);

  res.writeHead(200,{"Content-Type" : "text/json"});
  res.end(jsonFormData);
}

if (req.method === 'PUT' && parsedUrl.pathname === '/editData'){

  let body="";

  req.on('data',(chunks)=> {
    console.log("chunks:",chunks);
    body = body + chunks.toString();
    console.log("body:",body);
  });

  req.on('end',async()=>{
    let data= JSON.parse(body);

    let finalData ={
      date_time : data.date_time,
      top_priorities : data.top_priorities,
      tasks : data.tasks,
      daily_schedule : data.daily_schedule,
      for_tomorrow : data.for_tomorrow,
    }
    console.log("data :",data);

    let id = data.id;
    console.log("id :",id);
    console.log("typeof(id) :",typeof(id));

    let _id = new ObjectId(id);
    console.log("_id :",_id);
    console.log("typeof(_id) :", typeof(_id));

    await collection.updateOne({_id},{$set : finalData})
    .then((message)=> {
      console.log("message :",message);
      res.writeHead(200,{"Content-Type" : "text/plain"});
      res.end("success");
    })
    .catch((error)=> {
      console.log("error :",error);
      res.writeHead(400,{"Content-Type" : "text/plain"});
      res.end("failed");
    })

    

  })
}

if (req.method === 'DELETE' && parsedUrl.pathname === '/deleteData'){

  let body="";

  req.on('data',(chunks)=> {
    console.log("chunks:",chunks);
    body = body + chunks.toString();
    console.log("body:",body);
  });

  req.on('end',async()=>{
    let data= JSON.parse(body);

    let finalData ={
      date_time : data.date_time,
      top_priorities : data.top_priorities,
      tasks : data.tasks,
      daily_schedule : data.daily_schedule,
      for_tomorrow : data.for_tomorrow,
    }
    console.log("data :",data);

    let id = data.id;
    console.log("id :",id);
    console.log("typeof(id) :",typeof(id));

    let _id = new ObjectId(id);
    console.log("_id :",_id);
    console.log("typeof(_id) :", typeof(_id));

    await collection.deleteOne({_id},{$set : finalData})
    .then((message)=> {
      console.log("message :",message);
      res.writeHead(200,{"Content-Type" : "text/plain"});
      res.end("deleted");
    })
    .catch((error)=> {
      console.log("error :",error);
      res.writeHead(400,{"Content-Type" : "text/plain"});
      res.end("failed");
    })

  })
}

});

async function connect(){
  await client.connect()
  .then((messge)=>{
    console.log("Database connection established");

  })
  .catch((error)=>{
    console.log("Data")
    console.log("Database error :",error.message?error.message:error);
  })
  .finally(()=>{
    server.listen(port,()=>{
      console.log(`server running at http://localhost:3000`)
    })
  });
}

connect();