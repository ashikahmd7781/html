{
    function fibo(limit){
        let a=0;
        console.log(a);
        let b=1;
        console.log(b);
        let sum =0;
        while(sum<limit){
            sum=a+b;
            console.log(sum);
            a=b;
            b=sum;
        }
    }
    fibo(15);
}

//sum=1
//a=1
//b=1

//sum=2
//a=1
//b=2

//sum=3
//a=2
//b=3

//sum=15
//while loop stops

//up to limit

//array
{
    let arr =[0,1,2,3,4]
    function arrSum(arr) {
    let sum =0;
    for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    console.log("sum :",sum);
    return sum;
}
console.log("arrSum:",arrSum(arr));
let arrSumVar =arrSum(arr);
console.log("arrSumVar :",arrSumVar);

//Average
let Average=arrSum(arr)/arr.length;
console.log("Average:",Average);
}
  //minimum
 {

 let arr=[2,5,3,4,1];
 function arrayMin(arr) {
 let min = arr[0];
 for(let i=0;i<arr.length;i++){

     if(arr[i]<min)
     min=arr[i];
   
 }
 console.log("min : ",min);
 return min;
 }
 console.log("arrMin:",arrayMin(arr));
 let arrminVar =arrayMin(arr);
 console.log("arrminVar:",arrminVar);
 }

//maximum
{

   let arr=[2,5,3,10,4,1,7];
   function arrMax(arr) {
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
    
        if(arr[i]>max)
        max=arr[i];
       
     }
    console.log("max : ",max);
    return max;
   }
   console.log("arrMax:",arrMax(arr));
 let arrSumVar =arrMax(arr);
 console.log("arrMax:",arrMax);
    
     }

     {
        //Program to convert negative values in an array to possitive
        function arrToPostive(arr) {
            let i =0;
    
            while(i <arr.length){
                if(arr[i] <0) arr[i]=arr[i] * -1;
                i++;
            }
            return arr;
        }
        let arr =[-1,1,-2,2,-10,10,-100,100]
        let newArr =arrToPostive(arr);
        console.log("newArr :",newArr);
     }

//string reverse using built in functions
{
    str="world";
    rev=str.split("").reverse().join("");
    console.log("reverse of world is ",rev);
    }
    
    //string reverse for loop
    {
    function revstr(str){
        let rev="";
        for(i=str.length-1;i>=0;i--){
            rev+=str[i];
        }
    console.log("reverse : ",rev);
    }
    revstr("hello");
    }
    
    //pallindrome
    {
        function revstr(str){
            let rev="";
            for(i=str.length-1;i>=0;i--){
                rev+=str[i];
            }
        console.log("reverse : ",rev);
    
        if(str==rev)
        console.log("string is a pallindrome");
        else
        console.log("string is not a pallindrome");
        }
        revstr("javascript");
    }

    //multiplication

    {
        for(let i=1; i<=10; i++) {
            for(let j =1; j<=10; j++) {
                console.log(`${i} * ${j} =${i*j}\n`);
            }
        }
    }
//Sum of even and odd
    {
        
        let evensum=0;
        let oddsum=0;
        for(let i=1;i<=50; i++) {
            if(i%2==0){
                console.log("Even :",i);
                evensum=evensum+i;
            }else{
                console.log("Odd :",i);
                oddsum =oddsum +i;

            }
            
        }
        console.log("evenSum :",evensum);
        console.log("oddSum :",oddsum);
        
    }

    {
        //Normal function
        function printHello() {
            console.log("Hello");
        }
        printHello();

        //Recursion function
        let i =0;
        function count(){
            i++;
            while(i<=10) {
                console.log(i);
                count(); //Recursive function call
            }
        }
        count();  //Function call
        //1,2,3,...10

        console.log("Countdown using recursive function call");
        
        function Countdown(n) {
            if(n<=0) {
                console.log("Done");
 }else{
    console.log(n);
    Countdown(n-1); //Recursive call
 }
        }
        Countdown(5);//Normal function call

        //countdown(5),countdown(4),countdown(3),countdown(2),countdown(1),Done

        console.log("Factorial using recursive function call");

        function Factorial(n) {
            if(n==0 || n==1) {
                return 1;

            }else{
                return n*Factorial(n-1);
            }
        }
        let fact =Factorial(5);
        console.log("Factorial:",fact);

        //5*factorial(4)=>5*(4*factorial(3))=>5*(4*(3*factorial(2)))=>5*4*3*(2*factorial(1))=>5*4*3*2*1

    }

    {
        let myform =document.getElementById('myForm');
        var datas ={};
        let arr1=[];


        myform=addEventListener("submit", function (e) {

            e.preventDefault();//Stops default behaviour of form
    
            let email =document.getElementById('email');
            let email_value =email.value;
            console.log("email:",email_value);

            let password =document.getElementById('password');
            let password_value=password.value;
            console.log("password:",password_value);

            datas.email=email_value;
            datas.password=password_value;
           // console.log("datas :",datas);
            handledatas(datas);
        })

        function handledatas(datas){
            console.log("Datas:",datas);
          
            let Message = document.getElementById('message');
          
          
            //Validation 
            if (arr1.length>0){
              for(let i=0;i<arr1.length;i++){
          
                if(arr1[i].email==datas.email){
                  Message.innerHTML="Email already found";
                  return;
                }
              }
            }
          
            arr1.push(datas);
            Message.innerHTML="succes";
            console.log("arr:",arr1);
           }
          }
{
          let arr=[
            {
            name:"Akhil",
            mark:60,
            place:"tvm"
            },
          {
            name:"arav",
            mark:50,
            place:"kollam"
          }
        ];
        console.log("arr :",arr);

        //Array Function
        //for Each()
        {
        console.log("forEach ->");
        arr.forEach((item,index)=>{

            console.log(`item-${index}:`,item);
            return item.name=="Akhil"
        });


        //Find
        console.log("Find ->");
        const x=arr.find((item)=>{
            return item.name =="Akhil";
        });

        console.log("x:",x);

        //Filter
        console.log("Filter ->");

        const arr1 =arr.filter((item,index)=>{
            return item.mark ==60;
        });

        console.log("arr1:",arr1);

        //Map
        console.log("Map ->");

        const arr2=arr.map((item)=> {
            return item.name;
        });//Return an array of same length

        console.log("arr2 :",arr2);

        //Reduce
        const value=arr.reduce((total,item)=>{
            console.log("total :",total);
            console.log("item :",item);
            return total+item.mark;
        },0);
        console.log("Value :",value);

}
}

//square and sum of array elements using foreach
{
    let arr1 = [];
    let sum = 0;
    function squaresum(arr){
        arr.forEach((item,index)=>{
            square = item*item;
            sum+=square;
            arr1.push(square);
            
        });
        console.log("squared array : ",arr1);
        console.log("sum : ",sum);
    }
    squaresum([2,3,4]);
    }
    
    //first even number of an array using find
    {
    
        function filterarr(arr){
            const arr1 = arr.find((item,index)=>{
                return item%2 == 0
            });
            console.log("Even  : ",arr1);
            }
            filterarr([2,3,4,5,6,7,8]);
    
    }
    
    //filter all the even numbers in an array using filter function
    {
    
        function filterarr(arr){
            const arr1 = arr.filter((item,index)=>{
                return item%2 == 0
            });
            console.log("Even array : ",arr1);
            }
            filterarr([2,3,4,5,6,7,8]);
        }
    
    
    //double each elements in an array using map
    {
    
    function maparr(arr){
        const arr1 = arr.map((item,index)=>{
            return item*2;
        });
        console.log("Doubled array : ",arr1);
    }
    maparr([1,2,3,4,5]);
    }
    
    
    //write a function 'productPositive' that takes an array of numbers as input and uses the 'reduce' method to calculate the product of all posititve numbers in the array
    {
    
    function productPositive(arr){
        const value = arr.reduce((total,item)=>{
            if(item>0){
                return total*item;
            }
            else{
                return total;
            }
        },1);
        console.log("product of positive numbers is ",value);
    }
    productPositive([-2,3,4,-5,10]);
    
    }
        
    //work monday-dec4
    //3.given an array of numbers ,use the reduce method to calculate the sum of all the numbers
    {
    
    function sum(arr){
        const value = arr.reduce((total,item)=>{
            return total+item;
        },0);
        console.log("sum of elements : ",value);
    }
    sum([1,2,3,4,5]);
    
    }
    
    //4.given an array of numbers, use the reduce method to find the maximum value in the array
    {
    
        function max(arr){
            const value = arr.reduce((total,item)=>{ 
                return Math.max(total,item);
            });
            console.log("maximum value : ",value);
        }
        max([1,2,3,6,4,5]);
        
    }
    
    //5.given an array of strings, use the map method to create a new array where each string is capitalized
    {
    
    function stringUpper(arr){
        const value = arr.map((item)=>{
            return item.toUpperCase();
       });
        console.log("Capitalized string : ",value);
    }
    stringUpper(['a','b','c']);
    
    }
    
    //6.given an array of words, use the filter method to create a new array containing only the words with a length greater than a specified value
    {
    
    function wordLength(arr){
        const value = arr.filter((item)=>{
            return item.length>4;
        });
        console.log("Filtered array of words : ",value);
    }
    wordLength(['bus','elephant','banana','car']);
    
    }
    
    
    //7.given an array of numbers, use the map method to create a new array of strings indicating whether each number is even or odd
    {
    
    function evenoddstring(arr){
        const value = arr.map((item)=>{
            if(item%2==0){
                return "even";
            }
            else{
                return "odd";
            }
        });
        console.log("Array even or odd: ",value);
    }
    evenoddstring([2,6,5,7,1,9]);
    }
    
    //8.given an array of elements, use the filter method to create a new array with only unique elements(remove duplicates)
    {
    
    function unique(arr){
        const value = arr.filter((item,index)=>{
            return arr.indexOf(item)===index;
        });
        console.log("Filtered array of unique elements : ",value);
    }
    unique([1,3,4,1,5,2,6,2]);
    }
    
    //9.given an array of numbers, use the sort method to sort them in ascending order
    {
    function sortasc(arr){
        return arr.sort();
    }
    let value = sortasc([2,5,1,8,6,4]);
    console.log("sorted array in ascending order : ",value);
    }
    
    //10.Given an array of objects with a name property , use the map nethod to create a new array containing only the names
    {
    
    function nameob(arr){
        const value = arr.map((item)=>{
            return item.name;
        });
        console.log("names : ",value);
    }
    nameob([{name : 'sabin', marks : 50},
            {name : 'arjun', marks : 60},
            {name : 'ananthu', marks : 70}]);
    
    }
    
    //count vowels in a string
    {
    var count = 0;
    function countVowels(str){
        for(let i=0;i<str.length;i++){
            if(str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u"){
                count++;
            }
        }
        return count;
    
    }
    let a=countVowels("helloworld");
    console.log("count of vowels : ",a);
    }
    
    //this
    {
    
    console.log(this);
    
    let obj = {
        name : "john",
        getAge : function(){
            console.log(this);
        }
    }
    console.log(obj.name);
    console.log(obj.getAge());
    
    
    function greet(message,message1){
        console.log("message : ",message);
        console.log("message1 : ",message1);
        console.log("this : ",this);
        console.log("name : ",this.name);
    }
    //call method
    // greet.call(obj,"hello","hello1");
    
    
    //bind method
    let boundGreet = greet.bind(obj,"hello","hello1");
    console.log("boundGreet : ",boundGreet);
    boundGreet();
    
    
    //apply method
    greet.apply(obj,["hello","hello1"]);
    
    }
    
    
    
    let obj = {
        name : "harry",
        age :30,
        greeting : function () {
            console.log("name : ",this.name);
            console.log("age : ",this.age);
        }
    
    }
    obj.greeting();
    
    // //constructor functions
    // function Person(name,age){
    //     this.name = name;
    //     this.age = age;
    //     this.greeting = function(){
    //         console.log("name : ",this.name);
    //         console.log("age : ",this.age);
    //     }
    // }
    
    // const person1 = new Person("John",30);
    // console.log("person1 : ",person1);
    // person1.greeting();
    
    // const person2 = new Person("Jane",25);
    // console.log("person2 : ",person2);
    // person2.greeting();
    
    // //updating individual objects
    // person2.place = "Ernakulam";
    // console.log("Person2.place : ",person2.place);
    
    // Person.prototype.getMark = function(){
    //     return this.mark;
    // }
    
    // console.log("Mark of person1 : ",person1.getMark());
    // console.log("Mark of person2 : ",person2.getMark());
    
    
    // }
    
    // {
    
    // let obj = {
    //     name : "bmw",
    //     color : "red",
    //     greeting : function (){
    //         console.log("name : ",this.name);
    //         console.log("color : ",this.color);
    //     }
    // }
    // console.log("obj : ",obj);
    // obj.greeting();
    
    // function Car(name,color){
    //     this.name = name;
    //     this.color = color;
    //     this.greeting = function(){
    //         console.log("name : ",this.name);
    //         console.log("color : ",this.color);
    //     }
    // }
    
    // const car1 = new Car("benz","black");
    // console.log("Car1 : ",car1);
    // car1.greeting();
    
    // const car2 = new Car("Audi","red");
    // console.log("Car2 : ",car2);
    // car2.greeting();
    
    // }
    
    
    //Using Classes
    
    class Car{
        name;
        color;
        year;
    
        constructor(name, color, year){
            this.name = name;
            this.color = color;
            this.year = year;
        }
    
        greeting(){
            console.log("name : ",this.name);
            console.log("color : ",this.color);
            console.log("year : ",this.year);
        }
    }
    
    let car1 = new Car("swift","red",2014);
    console.log("car1  ",car1);
    car1.greeting();
    
    let car2 = new Car("Mustang","white",2000);
    console.log("car2 : ",car2);
    car2.greeting();
    
    //new keyword is used to create a new object
    
    {
    class Animal{
        name;
    
        constructor(name){
            this.name = name;
        }
    
        walk(){
            console.log("Animal walking");
        }
    }
    
    class Dog extends Animal{
        nickName;
    
        constructor(name,nickName){
            super(name);//calls parent constructor
            this.nickName = nickName;
        }
    
        walk(){
            console.log("Dog walking...");
        }
    }
    
    let myAnimal = new Animal("Monkey");
    console.log("myAnimal : ",myAnimal);
    myAnimal.walk();
    
    let myDog = new Dog("Parent of arjun","Arjun");
    console.log("myDog : ",myDog);
    myDog.walk();
    
    }
    
    //class car 
    {
    
        class Car{
            name;
            color;
            year;
        
            constructor(name, color, year){
                this.name = name;
                this.color = color;
                this.year = year;
            }
        
            greeting(){
                console.log("name : ",this.name);
                console.log("color : ",this.color);
                console.log("year : ",this.year);
            }
        }
    
        class Racingcar extends Car{
            speed;
    
            constructor(name,color,year,speed){
                super(name,color,year);
                this.speed = speed;
            }
    
            greeting(){
                console.log("speed : ",this.speed);
            }
        }
        
        let car1 = new Car("swift","red",2014);
        console.log("car1  ",car1);
        car1.greeting();
        
        let car2 = new Car("Mustang","white",2000);
        console.log("car2 : ",car2);
        car2.greeting();
    
        let car3 = new Racingcar("ferrari","red",2008,250);
        console.log("car3 : ",car3);
        car3.greeting();
    
    }
    
    
    {
    
    //Getters and Setters
    class car{
    
        constructor (name) {
            this.name = name;
        }
    
        //without using setters and getters
        //  setColor(color) {
            // this.color = color;
        // }
    
        // getColor(){
        //     return this.color;
        // }
    
    
        //using getters and setters
        set setColor(color) {
            this.color = color;
        }
    
        get getColor() {
            return this.color;
        }
    
    }
    
    let myCar = new car("Benz");
    
    //setting color
    //myCar.setColor("Green"); //Without using setter
    myCar.setColor = "Green"; //Using setter
    
    console.log("myCar : ",myCar);
    
    //Getting Color
    //console.log("Color of myCar : ",myCar.getColor()); //Without using getter
    console.log("Color of myCar : ",myCar.color); //Using getter
    
    }
    
    {
    
    class Button {
    
        constructor(content) {
            this.button = document.createElement('button');
            this.button.innerHTML = content;
            document.body.appendChild(this.button);
        }
    
        set width(width) {
            this.button.style.width = width + "px";
        }
    
        set height(height) {
            this.button.style.height = height + "px";
        }
    
        get width(){
            return this.button.style.width;
        }
    
        get height(){
            return this.button.style.height;
        }
    
        onClick(fn) {
            this.button.onclick = fn;
        }
    }
    
    let myButton = new Button('click here');
    console.log("myButton : ",myButton);
    
    myButton.width = 200;
    myButton.height = 50;
    
    console.log("Button width : ",myButton.width);
    console.log("Button height : ",myButton.height);
    
    myButton.onClick(function () {
        console.log("My button clicked...");
    });
    
    
    class yellowButton extends Button{
    
        //Method overriding
        onClick(fn) {
            this.button.onclick = function () {
                this.button.style.background = "yellow";
                fn();
            }.bind(this);
        }
    }
    
    let myYellowButton = new yellowButton("Yellow Button");
    console.log("myYellowButton : ",myYellowButton);
    
    
    myYellowButton.height = 50;
    myYellowButton.width = 200;
    
    console.log("myYellowButton width : ",myYellowButton.width);
    console.log("myYellowButton height : ",myYellowButton.height);
    
    myYellowButton.onClick(function (){
        console.log("myYellowButton clicked");
    });
    
    
    }
    
    
    //class paragraph
    {
    
    class Paragraph {
    
        constructor(content) {
        this.paragraph = document.createElement('p');
        this.paragraph.innerHTML = content;
        document.body.appendChild(this.paragraph);
        }
    
        set margin(margin) {
            this.paragraph.style.margin = margin + "px";
        }
    
        set padding(padding) {
            this.paragraph.style.padding = padding + "px";
        }
    
        set fontSize(fontSize) {
            this.paragraph.style.fontSize = fontSize + "px";
        } 
    
        set lineHeight(lineHeight) {
            this.paragraph.style.lineHeight = lineHeight + "px";
        }
    
    
    }
    
    
    let myParagraph = new Paragraph("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    // console.log("myParagraph : ",myParagraph);
    
    
    myParagraph.margin = 30;
    myParagraph.padding = 20;
    myParagraph.fontSize = 20;
    myParagraph.lineHeight = 50;
    
    
    class Paragraph2 extends Paragraph {
    
        constructor(content,btncontent) {
            super(content);
            this.button = document.createElement('button');
            this.button.innerHTML = btncontent;
            document.body.appendChild(this.button);
            
        }
    
        set fontColor(fontColor) {
            this.paragraph.style.color = fontColor;
        }
    
        set background(background) {
            this.paragraph.style.background = background;
        }
    }
    
    let myButton = new Paragraph2("click me");
    
    let newParagraph = new Paragraph2("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
    
    newParagraph.margin = 40;
    newParagraph.padding = 30;
    newParagraph.fontSize = 30;
    newParagraph.lineHeight = 60;
    newParagraph.fontColor = "red";
    newParagraph.background = "yellow"; 
    
    
    }

