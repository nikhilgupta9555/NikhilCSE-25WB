// primitive data type
var num = 10;
console.log(num);
console.log(typeof(num));
num = false;
console.log(num);
console.log(typeof(num));
num = "variable";
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));
num = undefined;
console.log(num);
console.log(typeof(num));

// refrence data type
//function
var sayHello=function()
{
    alert('hello world');
}
//array
var numberArray=[1,2,3];
var animals = new Array("cat","dog","mouse");
//object
var person=
{
 name:"John",
 age:30,
 city:"New York",
 title:"Mr."
}
console.log(person);
// symbol
const sym1 = Symbol('foo');
console.log(sym1);
const sym2 = Symbol('foo');
console.log(sym2);
if (sym1 === sym2) {
    console.log("true");
}
else {    console.log("false");
}