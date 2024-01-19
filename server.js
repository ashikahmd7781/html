const express = require('express');
const app = express();
let {MongoClient,ObjectId} = require('mongodb');
let dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

const client = new MongoClient('mongodb://127.0.0.1:27017');
const db = client.db ('ums12');
const collection = db.collection("users");

console.log("__dirname :", __dirname);
app.use('/',express.static(__dirname + '/client'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/test',(req,res)=>{
    res.status(200).send("Success");
});

app.post('/submit',async (req,res)=>{
    console.log("reached here");
    console.log("req body :", req.body);

    await collection.insertOne(req.body)
    .then((message)=> {
        console.log("Document inserted successfully :",message);
        res.status(201).send("Success");
    })
    .catch((errors)=>{
        console.log("Document insert failed :", errors);
        res.status(400).send("Failed");
    });
});

app.get('/getData', async (req,res)=>{
    const formData = collection.find();
    console.log("formData :", formData);

    const formDataArr = await formData.toArray();
    console.log("formDataArr :",formDataArr);

    let jsonFormData = JSON.stringify(formDataArr);
    console.log("jsonFormData :", jsonFormData);

    res.status(200).send(jsonFormData);
})

app.put('/editData',async (req,res)=>{
  let data = req.body;
  console.log("data:",data);

  let id = data.id;
  console.log("id:",id);
  console.log("typeof(id) :",typeof (id));
  let _id = new ObjectId(id);
  console.log("_id:",_id);
  console.log("typeof(_id):",typeof(_id));

  let updateData ={
    first_name:data.first_name,
    last_name:data.last_name,
    username:data.username,
    email_address:data.email_address,
    password:data.password,
  }


  await collection.updateOne({_id},{$set : updateData})
  .then((message)=>{
    console.log("Document updated Successfully :",message);
    res.status(200).send("success")
  })
  .catch((error)=>{
    console.log("Document not updated:",error);
    res.status(400).send("failed");
  })

});

app.delete('/deleteData', async (req,res)=>{
  let data = req.body;
  console.log("data:",data);

  let id = data.id;
  console.log("id:",id);
  console.log("typeof(id) :",typeof (id));
  let _id = new ObjectId(id);
  console.log("_id:",_id);
  console.log("typeof(_id):",typeof(_id));

  let deleteData ={
    first_name:data.first_name,
    last_name:data.last_name,
    username:data.username,
    email_address:data.email_address,
    password:data.password,
  }


  await collection.deleteOne({_id},{$set : deleteData})
  .then((message)=>{
    console.log("Document deleted Successfully :",message);
    res.status(200).send("success")
  })
  .catch((error)=>{
    console.log("Document not deleted:",error);
    res.status(400).send("failed");
  })
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
      app.listen(port,()=>{
        console.log(`server running at http://localhost:${port}`)
      })
    });
  }
  
  connect(); 