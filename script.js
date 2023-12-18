//Javascript is a synchronous single threaded language
//it performs asynchronous operations in the following way

//Callstack : adds asynchronous operations to callstack
//Event loop 
//Microtask queue
//Callback queue
//web space environment
//Asynchronous operation

// console.log("First line...");
// console.log("Second line");

// setTimeout( ()=> {
//     console.log("callback function");
// },4000);

// setTimeout( ()=> {
//     console.log("callback function1");
// },5000);

//event based asynchronous operations
// btn.add


//accessing external resources
// let datas = fetch('https://jsonplaceholder.typicode.com/users');
// console.log("datas : ", datas);

console.log("Third line...");

//types of requests
//get 
//post
//put
//delete


console.log("\n\n\nAjax..");

let xhr = new XMLHttpRequest();
let btn = document.getElementById('btn');

xhr.open("get",'https://jsonplaceholder.typicode.com/users');

btn.addEventListener('click',()=>{
  xhr.send();  
})


console.log("xhr response : ",xhr);

xhr.onreadystatechange = function () {
    console.log("readyState : ",xhr.readyState);

    let content = document.getElementById('content');
    console.log("content : ",content);
    let datas = '';

    if(xhr.readyState == 4) {

        if(xhr.status == 200) {
        console.log("response : ",xhr.response);
        console.log("type of response : ",typeof(xhr.response));

        let parsed_response = JSON.parse(xhr.response);
        console.log("parsed_response : ",parsed_response);
        console.log("type of parsed_response : ",typeof(parsed_response));

        for(let i=0; i<parsed_response.length; i++) {
            datas = datas + `<tr>
            <td>${parsed_response[i].id}</td>
            <td>${parsed_response[i].name}</td>
            <td>${parsed_response[i].username}</td>
            <td>${parsed_response[i].website}</td>
            </tr>`;
        }

        content.innerHTML = datas;
    }else {
        console.log("Request failed");
    }
}else {
    console.log("State not completed");
}

}


{

console.log("Javascript regular expressions");

const str1 = "The cat9 is white";
const str2 = "rats eats fish";
const str3 = "Is it ok fishafrfr";
const str4 = `
good meat
is always good
`;
const str5 = "hello"

const regexp1 = /a/;
const result1 = regexp1.test(str1);//checks if str1 has the letter 'a' in it
console.log("result1 : ",result1);

const regexp2 = /A/i;
const result2 = regexp2.test(str1);//checks if str1 contains the letter 'a' and performs case-insensitive search
console.log("result2 : ",result2); 

const regexp3 = /ab/;
const result3 = regexp3.test(str1);//checks if str1 has the letter 'ab' in it
console.log("result3 : ",result3);

//[] - represents range
const regexp4 = /[crb]a/;
const result4 = regexp4.test(str1);//checks if str1 has 'c' or 'r' or 'b' before 'a'
console.log("result4 : ",result4);

const regexp5 = /[a-z]a/i;
const result5 = regexp5.test(str1);//checks if str1 contains any letters in between 'a' to 'z' , also 'i' represents case insensitive search
console.log("result5 : ",result5);

const regexp6 = /[a-z0-9]a/i;
const result6 = regexp6.test(str1);//checks if str1 contains any letters in between 'a' to 'z' or any digits between 0 to 9 and 'i' represents case insensitive search
console.log("result6 : ",result6);

//^represents start of a string
const regexp7 = /^rat/i;
const result7 = regexp7.test(str2);//Checks if str2 starts with 'rat'
console.log("result7 : ", result7);

//$ represents end of a string
const regexp8 = /fish$/i;
const result8 = regexp8.test(str2);//Checks if str2 ends with 'fish'
console.log("result8 : ", result8);


const regexp9 = /^good/im;//m-flag represents multiline matching
const result9 = regexp9.test(str4);//Checks if str4 starts with 'good'
console.log("result9 : ", result9);

const regexp10 = /good$/im;//m-flag represents multiline matching
const result10 = regexp10.test(str4);//Checks if str4 ends with 'good'
console.log("result10 : ", result10);

const regexp11 = /fishes?/im;//word before '?' is optional for matching
const result11 = regexp11.test(str3);//it matches both fishe and fishes
console.log("result11 : ", result11);

const regexp12 = /fish(es)?/im;//'()' represents groups
const result12 = regexp12.test(str3);//it matches both fish and fishes, 'es' is optional
console.log("result12 : ", result12);

const regexp13 = /fishes*$/i;//The letter before '*' can occur multiple times in a string
const result13 = regexp13.test(str3);//it matches fishe , fishes, fishessss...
console.log("result13 : ", result13);

const regexp14 = /fishes+$/i;//The letter before '+' can occur multiple times in a string, but atleast one occurence is required
const result14 = regexp14.test(str3);//here it matches fishes , fishes, fishessss...
console.log("result14 : ", result14);

const regexp15 = /fish.$/i;//Any character can occur after fish, '.' represents any type of character
const result15 = regexp15.test(str3);//here it matches fishe , fisha, fishb, fish1, fish2..., but does not matches fish, a character in place of '.' is a must
console.log("result15 : ", result15);

const regexp16 = /fish.*$/i;//Any character can occur after fish, '.' represents any type of character
const result16 = regexp16.test(str3);//here it matches fishe , fisheswg, because of '*'
console.log("result16 : ", result16);

const regexp17 = /[kjm]/i;
const result17 = regexp17.test(str5);//if there is  a 'k' or 'j' or 'm' it will be true
console.log("result17 : ",result17);

const regexp18 = /[^kjm]/i;
const result18 = regexp18.test(str5);//if there is  no 'k' or 'j' or 'm' it will be true
console.log("result18 : ",result18);

const regexp19 = /[H+]/i;//Atleast one 'H' is required
const result19 = regexp19.test(str5);
console.log("result19 : ",result19);

const regexp20 = /0$/i;
const result20 = regexp20.test(str5);//string ends with '0'
console.log("result20 : ",result20);

const regexp21 = /0?$/i;//'0' in string ending is optional
const result21 = regexp21.test(str5);
console.log("result21 : ",result21);

const regexp22 = /0+$/i;//Atleast one '0' is required in the string ending
const result22 = regexp22.test(str5);
console.log("result22 : ",result22);

//{} - indicates the number of characters, a{2} means "aa", ie 2 a is required
const regexp23 = /L{2}o$/i;//'o' should be exactly after 2 L's
const result23 = regexp23.test(str5);
console.log("result23 : ",result23); 

const regexp24 = /L{2,4}o$/i;//'o' should be exactly after 2 to 4 L's
const result24 = regexp24.test(str5);
console.log("result24 : ",result24); 

const regexp25 = /HeL{2,4}o$/i;//'o' should be exactly after 2 to 4 L's and 'o'is required
const result25 = regexp25.test(str5);
console.log("result25 : ",result25); 

const regexp26 = /L{2,}o$/i;//'2 or more 'L' is required
const result26 = regexp26.test(str5);
console.log("result26 : ",result26); 

// \ - indiactes escape character, used for matching any characters which has special meaning
const regexp27 = /\d/i;//if there is any digits it will be true, else it will be false
const result27 = regexp27.test(str5);
console.log("result27 : ", result27);

const regexp28 = /\D/i;//if there is any non-digits it will be true, if there is only digits it will ve false
const result28 = regexp28.test(str5);
console.log("result28 : ", result28);

//Suppose we want to match '.' in astring, since '.' has a special meaning in regular expressions, it will not work as expected and match everything

const regexp29 = /./i;//if there is a '.' or anything it will match
const result29 = regexp29.test(str5);
console.log("result29 : ", result29);

//so we can write it as
const regexp30 = /\./i;//if there is any '.' in the string it will match, else it will be false
const result30 = regexp30.test(str5);
console.log("result30 : ", result30);

//So \' (backslash) is used to escape special character

//Date validation

//1
const regexpForDate = /^\d{1,2}-\d{1,2}-\d{4}$/i; //String should start with one or two digits, then after '-' aymbol, then again one or two digits, after '-', ending digits shoukd be 4

//2
// | - indicates or case 0 | 1 means either 0 or 1 can occur
const regexpforDate1 = /^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i;//In the first group- if the first character is 0 or 1 or 2 then the second character can be any digits(0-9) or if the character is '3' then the second character should be 0 or 1 0r 2
//In the last group four digits is allowed

function checkResult(value) {
    const result = regexpForDate1.test(value);

    if(result) {
        return '';
    }else {
        return 'Invalid string';
    }
}

const value = "16-12-2023"

let validation_result = checkResult(value);
console.log("validation_result : ", validation_result);

function onChange(arg){
    let validation_result = checkResult(arg.value);
    let label = document.getElementById('error');
    if(validation_result) {
        label.innerHTML = validation_result;
    }else {
        label.innerHTML + validation_result;
    }
}


}

// {

// //Input validation
// //A-Z, a-z
// //0-9
// //_
// //starts with character

// const regexInp = /^[a-z][a-z0-9_]*$/i;

// function checkResult(value) {
//     const result = regexInp.test(value);

//     if(result) {
//         return '';
//     }else {
//         return 'invalid string';
//     }
// }

// const value = "maxpayne3";

// let validation_result = checkResult(value);
// console.log("Validation_result : ", validation_result);


// function onChange(arg) {
//     let validation_result = checkResult(arg.value);
//     let label = document.getElementById('error');
//     if(validation_result) {
//         label.innerHTML = validation_result;
//     }else {
//         label.innerHTML = validation_result;
//     }
// }

// }


// //string replace using regular expressions
// let str5 = "a-b-c";

// let replacedString1 = str5.replace(/-/,":");//Replaces first "-" with ":"
// console.log("replacedString1 : ",replacedString1); 

// let replacedString2 = str5.replace(/-/g,":");//Replaces all "-" with ":"
// console.log("replacedString2 : ",replacedString2);

// let dateStr = '12-10-04';

// let dateStrReplaced = dateStr.replace(/(\d{2})$/,'20$1');//gets 'o4' from dateStr and replace it as '2004 , $1 will get the value of the first capture group i.e; within '()' brackets.
// console.log("datesStrReplaced : ", dateStrReplaced);
 
// {

// //email validation using regular expressions

// const regexpe = /^[a-z][a-z0-9@\.]*$/;

// function checkResult1(value) {
//     const result = regexpe.test(value);

//     if(result) {
//         return '';
//     }else {
//         return 'invalid string';
//     }
// }

// function onChange1(arg) {
//     let validation_result = checkResult1(arg.value);
//     let label = document.getElementById('error');
//     if(validation_result) {
//         label.innerHTML = validation_result;
//     }else {
//         label.innerHTML = validation_result;
//     }
// }

// }