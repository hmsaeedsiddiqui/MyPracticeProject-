// console.log("hello")
/*
 var name = "Keanue Reeves";
 var name = "Jhon Cena"
 console.log(name);
 */


// we can use let inplace of var to handle this problem well
/* 
let name = "Keanue Reeves";
name = "Jhon Cena";
console.log(name);
*/

 
// if we use const veriable we cant use two veriable with same like var and let
// it give you TypeError you cant change the value
/*
const name = "Keanue Reeves";
name = "Jhon Cena" 
console.log(name); 
 */


 /*
 function add(a,b,c){
  return a+b+c;

 }
 let x = 2;
 let y = 3;
 let z = 4;
 let addition = add(x,y,z);
 console.log(addition);
 */

 //different types of functions

 /*
 let fun = function(){
  console.log("hello world");
 }
 fun();
 */

/* 
let fun = (a,b)=>{
  console.log(a+b);
 }
 fun(2,3); 
 */

 /*
 let name = ["jhon","cena","jane"];
 console.log(name);
 console.log(name.length);
  console.log(name[1]);
  */

/*
let name =["jhon",1,true,null];
name.push("cena");
name.unshift("saeed");
name.splice(1,2,"siddiqui");
console.log(name);
*/
/*
let num = [10,20,30,40,50,12,43]
for(let i=0; i<num.length; i++){
  console.log(num[i]);
}
*/

/*
let num = [10,20,30,40,50,12,43];
num.forEach((val,index,array)=>{
  console.log(val+" "+index+" "+array);
})
*/

/*
let num1 = [10,20,30,40,50,12,43];
let num2 = [11,22,33,44,55,76,48];
 
console.log(num1.concat(num2)); // concat 2 arrays
console.log(num1.indexOf(20)); // find the index of a number
console.log(num1.reverse()); // to reverse array
console.log(num1.sort()); // to sort an array
*/

/*
let num1 = [10,20,30,40,50,12,43];
let a = num1.slice(2,5);
console.log(a);
*/

/*
let num1 = [10,20,30,40,50,12,43];
console.log(num1.toString());
*/


// filter 
/*
let num1 = [10,20,30,40,50,12,43];
let a = num1.filter((val,ind,array)=>{
  if(val>=10 && val<=25){
    return val;
  }
})
console.log(a);
*/

/*
let num1 = [10,20,30,40,50,12,43];
let a = num1.find((val,ind,array)=>{ // for find value in array

    return val==10;
})
console.log(a);
*/

/*
let num1 = [10,20,30,40,50,12,43];
let a = num1.findIndex((val,ind,array)=>{ // for find index of value

    return val==10;
})
console.log(a);
*/

/*
let num = '10,20,30';

let arr = num.split(','); // it split the number '10,20,30' to 10 20 30 in column direction
arr.forEach(element => {
  console.log(element);
});

console.log(arr); //it print the number '10,20,30'

let jo = arr.join(" and "); // output 10 and 20 and 30
console.log(jo);
*/

/*
let arr = [10,20,30,60,40];
for(let ind in arr){ // for in loop
  console.log(ind); // it will print all index of array
  console.log(arr[ind]) // it will print values of array
}
*/

/*
let arr = [10,20,30,60,40];
for(let val in arr){ // for of loop
  console.log(val); // it will print direct values of array
}
*/


// multi dimensional array
/*
let arr = [
  ["jhon",30],
  ["thomas",28],
  ["Robert",22],
]
console.log(arr[0][0]); // it will print "jhon" 0 index of 1st array

arr.forEach(data=>{
  data.forEach(val=>{
    console.log(val);
  })
});
*/

//copy and spread
/*
let arr1 = ["saeed","zain","osama","rajab"];
let arr2 =[...arr1];
arr2.push("raja")
console.log(arr1)
console.log(arr2)
*/

//array desutructuring
/*
let arr1 = ["saeed","zain","osama","rajab","pagal"];
let [ ...item3] = arr1;
console.log(item3)
*/

//Objects
/*
let obj = {
  name:"Bravo", // name and age are keys and Bravo and 21 are values
  age:21,
  "last name" : "saeed" ,// with out double qouts it will give you error
  fun: function(){
    console.log("I am a Function")
  },
  arr:[20,30,40]
}
console.log(obj.name); // these are way to print name and age value
console.log(obj.age);
console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["last name"]);
obj.fun(); // to call function in object
console.log(obj.arr); // to print array in function
obj.item_name="item"; // to more item in object
let a = "key2";
obj[a]= "item2"; // creat key and value and add to object
console.log(obj); // print all keys and values of object
 for(let i in obj){
  console.log(obj[i]);
 }
 */

 //how to object in array
 /*
 let arr = [
  {user:1,name:"saeed"},
  {user:2,name:"siddiqui"},
  {user:3,name:"zia"},
  {user:4,name:"alam"}
 ]

 console.log(arr)
 for(let i in arr){
  console.log(arr[i]);
 }
 for(let i of arr){
  console.log(i);     // you can use both in and of loop in this way
 }

let copyarr = [...arr];
for(let i in copyarr){
  console.log(copyarr[i]);
 }
*/


 // function inside funtion
/*
 function fun(){
  console.log("I am function 1");
  function fun2(){
    console.log("I am function 2")
  }
  fun2();
}
fun();
*/

//Lexical Scope
/*
function fun(){
  let a = 1;
  console.log("I am function 1 :"+a);
  function fun2(){
    let a = 2
    console.log("I am function 2 :"+2);
  }
  fun2();
}
fun();
*/

//Set
/*
const arr = [10,20,30,40,50,30];
console.log(arr);
const s =new Set([10,20,30,40,50,30]);// set print only unique values it does not print any repeating value
s.add(66);            // to add new number
s.add("hello");       // to add string you can any datatype
console.log(s);
length = 0;
for( let val of s){
  length++;
}
console.log(length);
*/

//Map
/*
var map1 = new Map([[1,"one"],
["fName","Mickey"],
["whole Number",[1,2,3,4,5]]]
);

console.log(map1.get("fName")); // get any value from map function by entering key
console.log(map1);
var k = map1.keys(){ // to get all keys in map method
  console.log(key);
}
*/
/*
var map2 = new Map();
map2.set("fName","Mouse")
console.log(map2);
*/

// use of symbol Symbol is use for uiqueness
/*
let sym = Symbol("id");
console.log(sym.toString());
console.log(sym.description);
*/

//Recurrsion
/*
function printNumberRecurrsion(n){
  if(n<=10){
    console.log(n)
    printNumberRecurrsion(n+1);
  }

}
printNumberRecurrsion(1);
*/
/*function fact(n){
  if(n==0){
    return 1;
  }
  else{
    return n*fact(n-1);
  }
}
console.log(fact(5));
*/

//Asynchronous
/*
 console.log("This") // 1st print This and then is and at last Asynchronous
 setTimeout(()=>{
  console.log("Asynchronous")  //Asynchronous will print after 3 seconds
 },3000)
 console.log("is");
 */

 //Callback
/*
 function fun(val){

  console.log(val);
 }

 function add(a,b,callback){
  let sum = a+b;
  callback(sum);
 }
 add(5,10,fun);
 */