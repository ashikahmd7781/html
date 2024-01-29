async function submitForm() {
    let firstname = document.getElementById('firstname').value;
    console.log("first name : ", firstname);

    let lastname = document.getElementById('lastname').value;
    console.log("last name : ", lastname);

    let email = document.getElementById('email').value;
    console.log("email : ", email);

    let password = document.getElementById('password').value;
    console.log("password : ", password);

    let data = {
        firstname,
        lastname,
        email,
        password
    }

    let json_data = JSON.stringify(data);

    let response = await fetch('/submit', {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json",
        },
        "body" : json_data,
    });

    let parsed_response = await response.text();

    if(parsed_response === "success") {
        alert("Form submitted successfully");
    }else {
        alert("Form submission failed");
    }
}

async function getData() {

    console.log("Hello World");
    let data = await fetch('http://localhost:5000/getData');
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

    let response = await fetch('/editData',{
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

function validatefirstName() {
    let firstname = document.getElementById('firstname').value;
    console.log("firstname : ", firstname);

    let firstname_error = document.getElementById('firstname-error');

    let firstname_regex = /^[a-zA-Z]{2,30}( [a-zA-Z]{2,30})?$/;

    let isfirstNameValid = firstname_regex.test(firstname);
    console.log("isfirstNameValid : ", isfirstNameValid);

    if(!isfirstNameValid) {
        firstname_error.innerHTML = "Invalid Name";
        return;
    }else {
        firstname_error.innerHTML = "";
        return;
    }
}

function validatelastName() {
    let lastname = document.getElementById('lastname').value;
    console.log("lastname : ", lastname);

    let lastname_error = document.getElementById('lastname-error');

    let lastname_regex = /^[a-zA-Z]{2,30}( [a-zA-Z]{2,30})?$/;

    let islastNameValid = lastname_regex.test(lastname);
    console.log("islastNameValid : ", islastNameValid);

    if(!islastNameValid) {
        lastname_error.innerHTML = "Invalid Name";
        return;
    }else {
        lastname_error.innerHTML = "";
        return;
    }
}

function validateEmail() {
    let email = document.getElementById('email').value;
    console.log("email : ", email);

    let email_error = document.getElementById('email-error');

    let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let isEmailvalid = email_regex.test(email);
    console.log("isEmailvalid : ", isEmailvalid);

    if(!isEmailvalid) {
        email_error.innerHTML = "Invalid Email";
        return;
    }else {
        email_error.innerHTML = "";
    }
}

function validatePassword() {
    let password = document.getElementById('password').value;
    console.log("password : ", password);

    let password_error = document.getElementById('password-error');

    let password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    let isPasswordvalid = password_regex.test(password);
    console.log("isPasswordvalid : ",isPasswordvalid);

    if(!isPasswordvalid) {
        password_error.innerHTML = "Invalid Password";
        return;
    }else {
        password_error.innerHTML = "";
        return;
    }
}