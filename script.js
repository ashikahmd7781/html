// // console.log("From External script");
// // console.log(window);//Global object
// /* Multiline comment
// first line
// second line
//  */
// //variables
// // var i; //Variable declaration
// // i="Hello"; //Initialization
// // console.log(i);

// // var a =10 //Declaration + Initialization
// // console.log("a : ", a);

// // //Datatypes
// // var str = "This is a string";
// // console.log("str : ", str);
// // console.log("Type of str : ", typeof str);

// // var num = 100;
// // console.log("num : ", num);
// // console.log("Type of num : ", typeof num);

// // var bool = true;
// // console.log("bool : ", bool);
// // console.log("Type of bool : ", typeof bool);

// // var a1 = undefined;
// // console.log("a1 : ", a1);
// // console.log("Type of a1 : ", typeof a1);

// // var b1 = null;
// // console.log("b1 : ", b1);
// // console.log("Type of b1 : ", typeof b1);

// // var c1;
// // console.log("c1 : ", c1);
// // console.log("Type of c1 : ", typeof c1);

// // var d1="";
// // console.log("d1 : ", d1);
// // console.log("Type of d1 : ", typeof d1);


// // document.write("This is from javascript...");


// // //String Methods
// // var str = "Hello,world";

// // console.log("Length : ", str.length)
// // console.log("upperCase : ", str.toLocaleUpperCase());
// // console.log("lowerCase : ", str.toLocaleLowerCase());
// // console.log(str.toUpperCase().length);
// // console.log(str.toUpperCase().toLowerCase().toLowerCase().toUpperCase().length);
// // console.log("trim : ",str.trim());
// // console.log("Trimmed length : ", str.trim().length);
// // console.log("Trim Start : ", str.trimStart());
// // console.log("Length of start trimmed string : ", str.trimStart().length);
// // console.log("Trim End : ", str.trimEnd());
// // console.log("Length of right trimmed string : ", str.trimEnd().length);
// // console.log("Replace : ",str.replace("Hello","Hai"));
// // console.log("StartsWith : ",str.startsWith("Hello"));
// // console.log("Endswith : ", str.endsWith("world"));

// // console.log("Split : ", str.split(',')) //Converts string to an array
// // console.log("Join : ", str.split(',').join(',')); //Convers array to string








// //Arrays
// var a = 10;
// console.log("a : ", a);

// var arr = [10, 20, 30, "Hello", 'Hai', true, false, undefined, null];

// console.log("arr : ", arr);
// console.log("type of arr : ", typeof arr);
// console.log("Length : ", arr.length);
// console.log("Join : ", arr.join(' '));
// console.log("Index : ", arr.indexOf("Hello"));
// console.log("Push element: ", arr.push("End"), ',', "arr : ", arr);
// console.log("Unshift element : ", arr.unshift("First"), ",", "arr : ", arr);
// console.log("Pop element : ", arr.pop(), ",", "arr : ", arr);
// console.log("shift element : ", arr.shift(), ",", "arr : ", arr);

// // Replace elements in an array
// arr[0] = 15;
// arr[3] = "Welcome";
// console.log("arr : ", arr);

// //Splice
// arr.splice(7, 2);
// console.log("arr splice : ", arr);

// arr.splice(3, 0, 40);
// console.log("arr : ", arr);

// //Objects
// var obj = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 10,
//     canadian: false,
//     hobbies: ["Reading", 'Gaming', "Drawing"]
// };

// console.log("obj : ", obj);
// console.log("Firstname : ", obj.firstName);
// console.log("Age : ", obj.age);
// console.log("Hobbies : ", obj.hobbies);

// obj.age = 11;
// console.log("obj : ", obj);

// obj.mark1 = 50;
// console.log("obj : ", obj); console.log("X : ", x);


// obj.mark2 = 100;
// console.log("obj : ", obj);
// console.log("X : ", x);

// //JSON STRING
// var obj1 = {
//     name: "Jane",
//     age: 21,
//     Indian: false,
// };
// ``
// var a = 10;
// console.log(`a : ${a}`);

// //Javascript object notation
// var json_str = JSON.stringify(obj1);
// //Converting javascript object to JSON String
// console.log(`Json string : ${json_str}`);


// //Parsing JSON
// var obj3 = JSON.parse(json_str);
// console.log(`Object : ${obj3.name}`);


// {
//     var a = 10; //Global scoped, can be declared anywhere in the function
// }

// console.log("a : ", a);


// //Block scoped

// {
//     let b; //Declare
//     b = 15; //Initialize

//     const c = 20;

//     console.log("b : ", b);
//     console.log("c : ", c);

//     b=20;
//     // c=25; Assignment to constant variable not possible
// }


// //Hoisting
// console.log("X : ", x);
// var x = 50;

// // console.log("y : ", y); Gives error
// let y = 60;

// //Multiple declarations
// var x = 100;
// // let y = 150; Gives error


// //Javascript conditions

// let num1 = "100";
// let num2 = 100;

// if (num1 > num2) {
//     console.log(`num1 : ${num1} is greater`)
// } else if (num1 == num2) {
//     console.log("Both are equal");
// } else {
//     console.log(`num2 : ${num2} is greater`)

// }

// if (false) {
//     console.log("Block 1");
// } else if (true) {
//     console.log("Block 2");
// } else if (true) {
//     console.log("Block 3");
// } else {
//     console.log("Block 4");
// }


// if (num1 === num2) {
//     console.log("Num1 equals Num2");
// } else {
//     console.log("Num1 not equals Num2");

// }
// flase && true
// //+,-,*,/,%, ++, --, ++var, --var, var++, var--
// //&&, ||, !
// //=
// //== , ===(type checking) , <, >, <=, >=, <===, >==

// if (!false) {
//     console.log("Condition true");
// } else {
//     console.log("Condition false");

// }

// // Pre increment
// let abc1 = 10;
// let result1 = ++abc1;
// console.log("Result1 : ", result1);

// //Pre decrement
// let abc2 = 10;
// let result2 = --abc2;
// console.log("result2 : ", result2);

// //Post increment
// let abc3 = 10;
// let result3 = abc3++;
// console.log("result3 : ", result3);

// //Post decrement
// let abc4 = 10;
// let result4 = abc4--;
// console.log("result4 : ", result4);


// //Switch statement
// let day = 1;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;console.log(`a : ${a}`);

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid value");
//         break;

// }

// //Loops

// {

//     //For loop
//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }


//     let i = 0;
//     //while loop
//     while (i <= 10) {
//         console.log("Hello from while loop...");
//         i = i + 1;
//     }

//     let j=0;
//     //dowhile loop
//     do {
//         console.log("Hello from do while loop");
//         j = j + 1;
//     } while (j <= 10);



//     //Break and continue
//     for (let i = 0; i <= 10; i++) {

//         if (i == 5) {
//             continue;
//         }

//         if (i == 8) {
//             break;
//         }

//         console.log(i);
//     }    


// }
// //  str = "*\n**\n***\n"
// {
//         //Nested loops
//         let string = '\n*\n**\n***\n';

//         for(let i=0; i<=10; i++) {

//             //Nested for loop
//             for(let j=0; j<i; j++) {
//                 string = string + '*';
//             }
            
//             string = string + '\n';
//         }
        
//         console.log(string);


//         //Functions

//         //Function definition
//         function printHello() {
//             //Code block
//             console.log("Hello");
//         }

//         printHello(); //Function call


//         //Function to print sum
//         function sum(a,b)//Parameter
//          {
//             let sum;
//             sum = a+b;
//             console.log("Sum : ", sum);
//         }

//         sum(10,20); //Argument


// }



// {

//     //Sumconsole.log(`a : ${a}`);
//     let sum = 0;

//     for(let i =0; i<=10; i++) {
//         sum = sum + i;
//         // console.log("Sum : ", sum)
//     }

//     console.log("Sum : ", sum);

//     //Print even numbers
//     let i=0;
//     while(i<=20) {

//         if(i%2 == 0) {
//             console.log("i : ", i)
//         }

//         i++;
//     }
// }

// {
//     //Call by value
//     let a = 10;

//     function update(a) {
//         a="New value";
//         console.log("From function : ", a);
//     }

//     update(a);
//     console.log("a : ", a);



//     //Call by reference
//     let arr = [10,20,30];

//     function arrUpdate(arr) {
//         arr[0] = 100;
//         console.log("arr from function : ", arr)
//     }

//     arrUpdate(arr);
//     console.log("arr : ", arr);
// }


// {
// //Closures
// function outerFunction() {

//     const outerVariable = 'From outer function';

//     function innerFunction() {

//         function innerFunction1() {

//             function innerFunction2() {

//                 console.log("outerVariable : ", outerVariable);
//             }

//             return innerFunction2;
//         }

//         return innerFunction1;
//     }

//     return innerFunction;
// }


// let result = outerFunction();//innerFunction code
// console.log("Result : ", result);
// result();

// let result1 = result();
// console.log("Result1 : ", result1);
// result1();

// let result2 = result1();
// console.log("Result2 : ", result2);
// result2();

// //A function along with its environment is called closure
// }

// {
//     //Dom methods
    
//     let content  = document.getElementsByClassName("content");
//     content[0].textContent = "Some content";
//     content[1].textContent = "Another content";

//     let text = document.getElementById("text");
//     text.textContent = "Some text";

//     let para = document.getElementsByTagName("p");
//     para[0].textContent = "A paragraph";

//     let listItem = document.querySelector(".container .container1 ul li");
    
//     listItem.textContent = "List item 1";

// }

// {
//     //Type of functions

//     //Named functions
//     function printHelloWorld() {
//         console.log("Hello world");
//     }

//     printHelloWorld();

//     //Anonymous functons
//     const printHai = function () {
//         console.log("Hai");
//     };

//     printHai();


//     //Arrow function
//     const printWelcome = () => {
//         console.log("Welcome");
//     };

//     printWelcome();


//     //Callback function
//     function printHaiWorld(callback) {
//         callback();
//     }

//     // const callback =  function () {
//     //     console.log("Hai world");
//     // };
//     printHaiWorld(function () {
//         console.log("Hai world");
//     });


//     let btn = document.getElementById('btn');
//     console.log("btn : ", btn);

//     btn.addEventListener('click', function () {
//         alert("Button clicked")
//     });

//     btn.addEventListener('mouseover', ()=> {
//         console.log("MouseOver event..");
//     });

//     btn.addEventListener('mouseout', ()=> {
//         console.log("mouseOut event...")
//     });

//     btn.addEventListener('mousedown', function () {
//         console.log("MouseDown event...")
//     });

//     btn.addEventListener('mouseup', ()=> {
//         console.log("MouseUp event...");
//     });

//     btn.addEventListener('mousemove', ()=> {
//         console.log("MouseMove event...");
//     });


//     let inp = document.getElementById('inp');

//     inp.addEventListener('keydown', ()=> {
//         console.log("KeyDown event...");
//     });

//     inp.addEventListener('keyup', function () {
//         console.log("KeyUp event...");
//     });

//     //Math functions
//     console.log(Math.sqrt(16)); //4
//     console.log(Math.round(10.4)); //10
//     console.log(Math.round(10.5)); //11
//     console.log(Math.ceil(10.2)); //11
//     console.log(Math.ceil(10.8)); //11
//     console.log(Math.floor(10.7)) //10
//     console.log(Math.floor(10.2)); //10
//     console.log(Math.abs(-90)); //90
//     console.log(Math.abs(90)); //90
//     console.log(Math.PI);//3.141592653589793
//     console.log(Math.max(10,20,30)); //30
//     console.log(Math.min(10,20,30)); //10
//     console.log(Math.pow(2,3));//8

// }

// {
//     let z = 10;
    
// }
// console.log(`value of z :`,z);


// timer functions

// setTimeout(function(){
//     console.log("timeout");
//     alert("timeout")
// },3000);

// setInterval(function(){
//     console.log("timeout");
//     alert("timeout")
// },3000);


//program to show current time
// function putzero(sec){
//     return sec<10?"0"+sec:sec;
// }

// function show(){
//     var time=document.getElementById('time');
//     var dt=new Date();
//     var hours=dt.getHours();
//     var ampm=hours<12?"am":"pm";

//     time.innerHTML=putzero(hours%12)+":"+putzero(dt.getMinutes())+":"+putzero(dt.getSeconds())+":"+ampm;
//     setTimeout(function(){
//             show();
//          },1000);
// }

// show();



//spread operator
// let arr=[1,2,3,4,5];
// console.log("arr : ",arr);

// let arr1=[...arr,6];
// console.log("arr1 : ",arr1);

// let obj = {
//     firstname : "jane",
//     lastname : "joe",
//     age : 25
// }
// console.log("obj : ",obj);
// let obj1=


//destructuring



//nested destructuring
// const matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// const [firstRow, secondRow, thirdRow] = matrix;

// const[a,b,c] = firstRow;
// const[d,e,f] = secondRow;
// const[g,h,i] = thirdRow;

// console.log("a : ",a);
// console.log("b : ",b);
// console.log("c : ",c);
// console.log("d : ",d);
// console.log("e : ",e);
// console.log("f : ",f);
// console.log("g : ",g);
// console.log("h : ",h);
// console.log("i : ",i);

// const person = {
//     name : "john",
//     age : 30,
//     address : {
//         city : "new york",
//         zipcode : '10001'
//     }
// }

// const {name, age, address : {city, zipcode}} = person;
// console.log("name : ", name);
// console.log("age : ", age);
// console.log(" city : ",city);
// console.log("zipcode : ", zipcode);


//factorial

// function fact(a){
//     let b=1;
//     for(let i=1;i<=a;i++)
//     b=b*i;
//     return b;
// }

// console.log("factorial : ",fact(3));

//fibonacci series

// function fib(z){
//     console.log(0+"\n"+1);
//     let i=0, a=0, b=1, c;
//     while(i<z/2){
        
//         let c=a+b;
//         a=b;
//         b=c;
//         console.log(c);
//         i++;
//     }
// }

// fib(5);

//array operations
    //sum
    let sum=0;
    let a=[1,2,3,4,5];
    for(let i=0;i<length.a;i++){
        sum=sum+a[i];
    }
    console.log("sum of the array is ",sum)
    