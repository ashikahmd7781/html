async function getData() {

    console.log("Hello World");
    let data = await fetch('http://localhost:3000/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let content = document.getElementById("content");
    console.log("content : ", content);

    let rows = "";

    for(let i=0; i<parsedData.length;i++) {
        rows = rows + `
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type="text" name="firstname" id="firstname-${parsedData[i]._id}" value=${parsedData[i].firstname}" disabled=true></td>
        <td><input type="text" name="lastname" id="lastname-${parsedData[i]._id}" value="${parsedData[i].lastname}" disabled=true></td>
        <td><input type="email" name="email" id="email-${parsedData[i]._id}" value="${parsedData[i].email}" disabled=true></td>
        <td><input type="password" name="password" id="password-${parsedData[i]._id}" value="${parsedData[i].password}" disabled=true></td>
        <td><button onclick="handleEdit('${parsedData[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${parsedData[i]._id}')">Save</button></td>
        <td><button onclick="handleDelete('${parsedData[i]._id}')">Delete</button></td>
        
        `
    }

    content.innerHTML = rows;
}

getData();

function handleEdit(id) {
    console.log("id :", id);

    let firstname = document.getElementById(`firstname-${id}`);
    console.log("firstname : ", firstname);
    firstname.disabled = false;

    let lastname = document.getElementById(`lastname-${id}`);
    console.log("lastname : ", lastname);
    lastname.disabled = false;

    let email = document.getElementById(`email-${id}`);
    console.log("email : ", email);
    email.disabled = false;

    let password = document.getElementById(`password-${id}`);
    console.log("password : ", password);
    password.disabled = false;
}

async function handleSave(id) {
    console.log("id : ", id);

    let firstnameTag = document.getElementById(`firstname-${id}`);
    console.log("firstnameTag : ", firstnameTag);
    let firstname = firstnameTag.value;
    console.log("firstname : ", firstname);

    let lastnameTag = document.getElementById(`lastname-${id}`);
    console.log("lastnameTag : ", lastnameTag);
    let lastname = lastnameTag.value;
    console.log("lastname : ", lastname);

    let emailTag = document.getElementById(`email-${id}`);
    console.log("emailTag : ", emailTag);
    let email = emailTag.value;
    console.log("email : ", email);

    let passwordTag = document.getElementById(`password-${id}`);
    console.log("passwordTag : ", passwordTag);
    let password = passwordTag.value;
    console.log("password : ", password);

    let data = {
        id,
        firstname,
        lastname,
        email,
        password,
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData : ",jsonData);

    let response = await fetch('http://localhost:3000/editData',{
        method : 'PUT',
        Headers : {
            "Content-Type" : "application/json",
        },
        body : jsonData,
    });

    console.log("response : ", response);
    let parsed_response = await response.text();

    if(parsed_response = "success") {
        alert("Updation Success");
    }else{
        alert("Updation Failed");
    }

}

async function handleDelete(id) {
    console.log("id : ", id);

    let firstnameTag = document.getElementById(`firstname-${id}`);
    console.log("firstnameTag : ", firstnameTag);
    let firstname = firstnameTag.value;
    console.log("firstname : ", firstname);

    let lastnameTag = document.getElementById(`lastname-${id}`);
    console.log("lastnameTag : ", lastnameTag);
    let lastname = lastnameTag.value;
    console.log("lastname : ", lastname);

    let emailTag = document.getElementById(`email-${id}`);
    console.log("emailTag : ", emailTag);
    let email = emailTag.value;
    console.log("email : ", email);

    let passwordTag = document.getElementById(`password-${id}`);
    console.log("passwordTag : ", passwordTag);
    let password = passwordTag.value;
    console.log("password : ", password);

    let data = {
        id,
        firstname,
        lastname,
        email,
        password,
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData : ",jsonData);

    let response = await fetch('http://localhost:3000/deleteData',{
        method : 'DELETE',
        Headers : {
            "Content-Type" : "application/json",
        },
        body : jsonData,
    });

    console.log("response : ", response);
    let parsed_response = await response.text();

    if(parsed_response = "success") {
        alert("Deletion Success");
    }else{
        alert("Deletion Failed");
    }

}