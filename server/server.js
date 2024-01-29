const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

app.use(express.static(__dirname + "/../client"));
app.use(express.json());

app.get('/test',(req,res)=>{
    res.status(200).send("success");
})

app.post('/submit',(req,res)=>{
    const datas = req.body;
    console.log("datas : ", datas);

    let folderPath = "./datas";
    let fileName = "datas.json";
    let filePath = path.join(folderPath,fileName);

    let datasArr = [];
    datasArr.push(datas);

    let jsonDatasArr = JSON.stringify(datasArr);

    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath, {recursive : true});
    }
            
                
                if (fs.existsSync(filePath)) {
                    
                    fs.readFile(filePath, 'utf8', (readErr, data) => {
                        if (readErr) {
                            console.log("readErr: ", readErr);
                            res.status(500).send("Internal Server Error");
                            return;
                        }
            
                        let datasArr = JSON.parse(data);
            
                     
                        datasArr.push(datas);
            
                     
                        let jsonDatasArr = JSON.stringify(datasArr);
            
                       
                        fs.writeFile(filePath, jsonDatasArr, (writeErr) => {
                            if (writeErr) {
                                console.log("writeErr: ", writeErr);
                                res.status(500).send("Internal Server Error");
                            } else {
                                console.log("success");
                                res.status(201).send("success");
                            }
                        });
                    });
                } else {
                 
                    let datasArr = [datas];
                    let jsonDatasArr = JSON.stringify(datasArr);
            
                    if (!fs.existsSync(folderPath)) {
                        fs.mkdirSync(folderPath, { recursive: true });
                    }
            
                    fs.writeFile(filePath, jsonDatasArr, (err) => {
                        if (err) {
                            console.log("err: ", err);
                            res.status(500).send("Internal Server Error");
                        } else {
                            console.log("success");
                            res.status(201).send("success");
                        }
                    });
                }

            
   
        })


app.listen(PORT,()=>{
    console.log(`Server runnung at http://localhost:${PORT}`);
})