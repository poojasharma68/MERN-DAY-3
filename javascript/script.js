// console.log("hello");

// var message='hello world';    //dynamically typed

// var age=18;    //loosly typed
// age="done";

// console.log(message);
// console.log(message);

// var message="hello";
// console.log(message);

// message="else";
// console.log(message);

// function emv(){
//     for(var i=0;i<5;i++){
//         console.log('--',i);
//     }
//     console.log(i);
// }
// emv();

// let message="hello";

// message="else";
// console.log(message);

// const message="hello";
// console.log(message);

//DATA TYPES
// let age=20;
// console.log (typeof(age));

// let arr=['a','b','c','d'];

// arr[0]='abcd';
// console.log(arr);

// let str="12";
// let age=20;

// let ans=age+str;
// console.log(ans);


// let str='12';
// let p=parseInt(str);

// != and !==

// const str='pooja';
// const userName='my name is : ';
// const ans=`${userName} ${str}`;         //syntax eff way of doing this
// console.log(ans);


//functions

// function print(str='nothing is here'){
//     console.log(str);
// }

// const s='hello';
// print(s);

//  function sum(a,b){
//     if(a&&b){
// console.log(a+b);
//     }
//     else if(a){
// console.log(a);
//     }
//     else{
//         console.log(0);
//     }
// }
// sum(10);

//arrow function

//function declaration
// function print(){
//     console.log('--');
// }

// //function assignment (named)
// const a=function print(){
//     console.log('--');
// }
// //function assignment (anonymous)
// const b=function (){
//     console.log('--');
// }

// //arrow function assignment
// let c=()=>{
//     console.log('--');
// }
// print();

// let a=2;

// switch(a){
//     case 1:{
//         console.log('one');
//         break;
//     }

//     case 2:{
//         console.log('two');
//         break;
//     }
//     case 3:{
//         console.log('three');
//         break;
//     }
//     default:{
//         console.log('not a valid number');
//     }
// }

// ways to make object
// const obj=new Object();
// obj[1]='one';
// obj[2]='two';
// obj['name']='pooja';
// console.log(obj);

const obj = {
    1: 'one',
    'firstName':'pooja',
    'lastName':'singh',
    12:'twelve',
    age:20,
};
// const fullName=obj.firstName+' '+obj.lastName;   //can use $ also

// console.log(fullName);
const x=prompt('please tell the property to know');
console.log(obj[x]);