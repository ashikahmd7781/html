async function getData(){
    console.log("Hello world");
    let data = await fetch ('http://localhost:3000/getData');
    console.log("data :",data);

    let parsedData = await data.json();
    console.log("parsedData:",parsedData)
}

getData();