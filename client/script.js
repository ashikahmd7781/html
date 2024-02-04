async function submitForm() {
    let moviename = document.getElementById('moviename').value;
    console.log("movie name : ", moviename);

    let movietype = document.getElementById('movietype').value;
    console.log("movie type : ", movietype);

 
    let data = {
        moviename,
        movietype
    }
    let json_data = JSON.stringify(data);

    let response = await fetch('http://localhost:3002/submit', {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json",
        },
        "body" : json_data,
    });

    let parsed_response = await response.json();

    if(parsed_response.success) {
        alert("Movie submitted successfully");
    }else {
        alert(parsed_response.message);
    }
}

async function getData() {

    console.log("Hello World");
    let data = await fetch('http://localhost:3002/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let pd = parsedData.data;

    let content = document.getElementById("content");
    console.log("content : ", content);

    let content1 = document.getElementById("content1");
    console.log("content1 : ", content1);

    let content2 = document.getElementById("content2");
    console.log("content2 : ", content2);

    let content3 = document.getElementById("content3");
    console.log("content3 : ", content3);

    let content4 = document.getElementById("content4");
    console.log("content4 : ", content4);

    

   let getData ="";
   getData = getData + `
        
        <p><input type="text" name="moviename" id="moviename-${pd[0]._id}" value=${pd[0].moviename}" disabled=true></p>
        <p><input type="text" name="movietype" id="movietype-${pd[0]._id}" value="${pd[0].movietype}" disabled=true></p>
        `;

        let getData1 ="";
        getData1 = getData1 + `
             
             <p><input type="text" name="moviename" id="moviename-${pd[1]._id}" value=${pd[1].moviename}" disabled=true></p>
             <p><input type="text" name="movietype" id="movietype-${pd[1]._id}" value="${pd[1].movietype}" disabled=true></p>
             `;

        let getData2 ="";
        getData2 = getData2 + `
                  
            <p><input type="text" name="moviename" id="moviename-${pd[2]._id}" value=${pd[2].moviename}" disabled=true></p>
             <p><input type="text" name="movietype" id="movietype-${pd[2]._id}" value="${pd[2].movietype}" disabled=true></p>
            `;     

            
        let getData3 ="";
        getData3 = getData3 + `
                  
            <p><input type="text" name="moviename" id="moviename-${pd[3]._id}" value=${pd[3].moviename}" disabled=true></p>
             <p><input type="text" name="movietype" id="movietype-${pd[3]._id}" value="${pd[3].movietype}" disabled=true></p>
            `;    
                
              
        let getData4 ="";
        getData4 = getData4 + `
                  
            <p><input type="text" name="moviename" id="moviename-${pd[4]._id}" value=${pd[4].moviename}" disabled=true></p>
             <p><input type="text" name="movietype" id="movietype-${pd[4]._id}" value="${pd[4].movietype}" disabled=true></p>
            `;       
            

    content.innerHTML = getData;
    content1.innerHTML = getData1;
    content2.innerHTML = getData2;
    content3.innerHTML = getData3;
    content4.innerHTML = getData4;
}

getData();

function handleEdit(id) {
    console.log("id :", id);

    let moviename = document.getElementById(`moviename-${id}`);
    console.log("moviename : ", moviename);
    moviename.disabled = false;

    let movietype = document.getElementById(`movietype-${id}`);
    console.log("movietype : ", movietype);
    movietype.disabled = false;

}

async function handleSave(id) {
    console.log("id : ", id);

    let movienameTag = document.getElementById(`moviename-${id}`);
    console.log("movienameTag : ", movienameTag);
    let moviename = movienameTag.value;
    console.log("moviename : ", moviename);

    let movietypeTag = document.getElementById(`movietype-${id}`);
    console.log("movietypeTag : ", movietypeTag);
    let movietype = movietypeTag.value;
    console.log("movietype : ", movietype);

   

    let data = {
        id,
        moviename,
        movietype,
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

function validatemoviename() {
    let moviename = document.getElementById('moviename').value;
    console.log("moviename : ", moviename);

    let moviename_error = document.getElementById('moviename-error');

    let moviename_regex = /^[a-zA-Z]{2,30}( [a-zA-Z]{2,30})?$/;

    let ismovieNameValid = moviename_regex.test(moviename);
    console.log("ismovieNameValid : ", ismovieNameValid);

    if(!ismovieNameValid) {
        moviename_error.innerHTML = "Invalid Name";
        return;
    }else {
        moviename_error.innerHTML = "";
        return;
    }
}

function validatemovietype() {
    let movietype = document.getElementById('movietype').value;
    console.log("movietype : ", movietype);

    let movietype_error = document.getElementById('movietype-error');

    let movietype_regex = /^[a-zA-Z]{2,30}( [a-zA-Z]{2,30})?$/;

    let ismovietypeValid = movietype_regex.test(movietype);
    console.log("ismovietypeValid : ", ismovietypeValid);

    if(!ismovietypeValid) {
        movietype_error.innerHTML = "Invalid Name";
        return;
    }else {
        movietype_error.innerHTML = "";
        return;
    }
}

