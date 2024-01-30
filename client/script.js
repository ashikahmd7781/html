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
        <td><input type="text" date_time="date_time" id="date_time-${parsedData[i]._id}" value="${parsedData[i].date_time}" disabled=true></td>
        <td><input type="text" top_priorities="top_priorities" id="top_priorities-${parsedData[i]._id}" value="${parsedData[i].top_priorities}" disabled=true></td>
        <td><input type="text" tasks="tasks" id="tasks-${parsedData[i]._id}" value="${parsedData[i].tasks}" disabled=true></td>
        <td><input type="text" daily_schedule="daily_schedule" id="daily_schedule-${parsedData[i]._id}"  value="${parsedData[i].daily_schedule}" disabled=true></td>
        
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

    let date_time = document.getElementById(`date_time-${id}`);
    console.log("date_time:",date_time);
    date_time.disabled =false;

    let top_priorities = document.getElementById(`top_priorities-${id}`);
    console.log("top_priorities:",top_priorities);
    top_priorities.disabled =false;

    let tasks = document.getElementById(`tasks-${id}`);
    console.log("tasks:",tasks);
    tasks.disabled =false;


    let daily_schedule = document.getElementById(`daily_schedule-${id}`);
    console.log("daily_schedule:",daily_schedule);
    daily_schedule.disabled =false;

    


}

async function handleSave(id){
    console.log("id:",id);

    let date_timeTag = document.getElementById(`date_time-${id}`);
    console.log("date_timeTag:",date_timeTag);
    let date_time =date_timeTag.value;
    console.log("date_time",date_time);

    let top_prioritiesTag = document.getElementById(`top_priorities-${id}`);
    console.log("top_prioritiesTag:",top_prioritiesTag);
    let top_priorities =top_prioritiesTag.value;
    console.log("top_priorities",top_priorities);'${parsedData[i]._id}'

    let tasksTag = document.getElementById(`tasks-${id}`);
    console.log("tasksTag:",tasksTag);
    let tasks =tasksTag.value;
    console.log("tasks",tasks);


    let daily_scheduleTag = document.getElementById(`daily_schedule-${id}`);
    console.log("daily_scheduleTag:",daily_scheduleTag);
    let daily_schedule =daily_scheduleTag.value;
    console.log("daily_schedule",daily_schedule);




    let data = {
        id,
        date_time,
        top_priorities,
        tasks,
        daily_schedule,
        
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
    
        let date_timeTag = document.getElementById(`date_time-${id}`);
        console.log("date_timeTag:",date_timeTag);
        let date_time =date_timeTag.value;
        console.log("date_time",date_time);
    
        let top_prioritiesTag = document.getElementById(`top_priorities-${id}`);
        console.log("top_prioritiesTag:",top_prioritiesTag);
        let top_priorities =top_prioritiesTag.value;
        console.log("top_priorities",top_priorities);
    
        let tasksTag = document.getElementById(`tasks-${id}`);
        console.log("tasksTag:",tasksTag);
        let tasks =tasksTag.value;
        console.log("tasks",tasks);
    
    
        let daily_scheduleTag = document.getElementById(`daily_schedule-${id}`);
        console.log("daily_scheduleTag:",daily_scheduleTag);
        let daily_schedule =daily_scheduleTag.value;
        console.log("daily_schedule",daily_schedule);
    
    
       
    
        let data = {
            id,
            date_time,
            top_priorities,
            tasks,
            daily_schedule,
            
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


