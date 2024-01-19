async function getData(){
    console.log("Hello world");
    let data = await fetch ('/getData');
    console.log("data :",data);

    let parsedData = await data.json();
    console.log("parsedData:",parsedData);

    let content = document.getElementById("content");
    console.log("content:",content);

    let rows ="";

    for (let i=0; i<parsedData.length;i++){
        rows=rows+ `
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type="text" first_name="first_name" id="first_name-${parsedData[i]._id}" value="${parsedData[i].first_name}" disabled=true></td>
        <td><input type="text" last_name="last_name" id="last_name-${parsedData[i]._id}" value="${parsedData[i].last_name}" disabled=true></td>
        <td><input type="text" username="username" id="username-${parsedData[i]._id}" value="${parsedData[i].username}" disabled=true></td>
        <td><input type="text" email_address="email_address" id="email_address-${parsedData[i]._id}"  value="${parsedData[i].email_address}" disabled=true></td>
        <td><input type="text" password="password" id="password-${parsedData[i]._id}" value="${parsedData[i].password}" disabled=true></td>
        <td><button onclick="handleEdit('${parsedData[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${parsedData[i]._id}')">Save</button></td>
        <td><button onclick="handleDelete('${parsedData[i]._id}')">Delete</button></td>
        </tr>
        `
    }

    content.innerHTML=rows;
}

getData();

function handleEdit(id){
    console.log("id:",id);

    let first_name = document.getElementById(`first_name-${id}`);
    console.log("first_name:",first_name);
    first_name.disabled =false;

    let last_name = document.getElementById(`last_name-${id}`);
    console.log("last_name:",last_name);
    last_name.disabled =false;

    let username = document.getElementById(`username-${id}`);
    console.log("username:",username);
    username.disabled =false;


    let email_address = document.getElementById(`email_address-${id}`);
    console.log("email_address:",email_address);
    email_address.disabled =false;

    let password = document.getElementById(`password-${id}`);
    console.log("password:",password);
    password.disabled =false;


}

async function handleSave(id){
    console.log("id:",id);

    let first_nameTag = document.getElementById(`first_name-${id}`);
    console.log("first_nameTag:",first_nameTag);
    let first_name =first_nameTag.value;
    console.log("first_name",first_name);

    let last_nameTag = document.getElementById(`last_name-${id}`);
    console.log("last_nameTag:",last_nameTag);
    let last_name =last_nameTag.value;
    console.log("last_name",last_name);'${parsedData[i]._id}'

    let usernameTag = document.getElementById(`username-${id}`);
    console.log("usernameTag:",usernameTag);
    let username =usernameTag.value;
    console.log("username",username);


    let email_addressTag = document.getElementById(`email_address-${id}`);
    console.log("email_addressTag:",email_addressTag);
    let email_address =email_addressTag.value;
    console.log("email_address",email_address);


    let passwordTag = document.getElementById(`password-${id}`);
    console.log("passwordTag:",passwordTag);
    let password =passwordTag.value;
    console.log("password",password);

    let data = {
        id,
        first_name,
        last_name,
        username,
        email_address,
        password,
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData:",jsonData);

    let response = await fetch('/editData',{
        method : "PUT",
        headers : {
            "Content-Type": "application/json",
        },
        body :jsonData,
    });

    console.log("response :",response);
    let parsed_response = await response.text();

    if(parsed_response == "success") {
        alert("Updation success");
    }else  {
        alert ("Updation failed");
    }

    getData();
}


async function handleDelete(id){
     console.log("id:",id);
    
        let first_nameTag = document.getElementById(`first_name-${id}`);
        console.log("first_nameTag:",first_nameTag);
        let first_name =first_nameTag.value;
        console.log("first_name",first_name);
    
        let last_nameTag = document.getElementById(`last_name-${id}`);
        console.log("last_nameTag:",last_nameTag);
        let last_name =last_nameTag.value;
        console.log("last_name",last_name);
    
        let usernameTag = document.getElementById(`username-${id}`);
        console.log("usernameTag:",usernameTag);
        let username =usernameTag.value;
        console.log("username",username);
    
    
        let email_addressTag = document.getElementById(`email_address-${id}`);
        console.log("email_addressTag:",email_addressTag);
        let email_address =email_addressTag.value;
        console.log("email_address",email_address);
    
    
        let passwordTag = document.getElementById(`password-${id}`);
        console.log("passwordTag:",passwordTag);
        let password =passwordTag.value;
        console.log("password",password);
    
        let data = {
            id,
            first_name,
            last_name,
            username,
            email_address,
            password,
        }
    
        let jsonData = JSON.stringify(data);
        console.log("jsonData:",jsonData);
    
        let response = await fetch('/deleteData',{
            method : "DELETE",
            headers : {
                "Content-Type": "application/json",
            },
            body :jsonData,
        });
    
        console.log("response :",response);
        let parsed_response = await response.text();
    
        if(parsed_response == "deleted") {
            alert("Deleted success");
        }else  {
            alert ("failed");
        }

        getData();
    
    }


