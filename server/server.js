const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

const client =new MongoClient("mongodb://localhost:27017");
const db= client.db('ums');
const collection = db.collection("users");

//Test route
app.get('/test',(req,res, next)=> {
  // res.status(200).send("success");
  next();
},(req,res, next) => {
  //console.log("Succes1");
  //res,status(200).send("Success1");
  next();
}, (req,res) => {
  console.log("Success2");
  res.status(200).send("Success2");
});

console.log("__dirname : ", __dirname);
app.use('/',express.static(__dirname + './..//client'));
app.use(express.urlencoded({extended : false}));//To parse form datas
app.use(express.json());//to parse json datas

app.post('/submit',async (req,res)=>{
    let data = req.body;
    console.log("data : ", data);

    await collection.insertOne(req.body)
        .then((message=>{
            console.log("Document inserted succesfully : ",message);
            res.status(201).send("success");
        }))
        .catch((errors)=>{
            console.log("Document insertion failed : ", errors);
            res.status(400).send("failed");
        })
});

app.get('/getData', async (req, res) => {
  let data = await collection.find().toArray();
  console.log("data : " , data);

  let json_data = JSON.stringify(data);
  console.log("json_data : ", json_data);

  res.status(200).send(json_data);
});

app.put('/editData', async (req, res) => {
  let data = req.body;
  console.log("data : ", data);

  let id = data.id;
  console.log("id : ", id);
  console.log("typeof(id) : ", typeof (id));
  let _id = new ObjectId(id);
  console.log("_id : ", _id);
  console.log("typeof(_id) : ", typeof (_id));

  let updateDatas = {
    name : data.name,
    email : data.email,
    password : data.password,

  }

  await collection.updateOne({_id},{$set : updateDatas})
  .then((message)=>{
    console.log("Document updated successfully : ", message);
    res.status(200).send("success");
  })
  .catch((error)=>{
    console.log("Document not updated : ", error);
    res.status(400).send("failed");
  })
});

async function connect() {

    await client.connect()
    .then((message)=> {
      console.log("Database connection established");
    })
    .catch((error)=> {
      console.log("Database not connected");
      console.log("Database error : ", error.message?error.message:error);
    })
    .finally(()=>{
      app.listen(port, ()=>{
        console.log(`server running at http://localhost:${port}`);
      })
    });
  }
  
  connect();
  

