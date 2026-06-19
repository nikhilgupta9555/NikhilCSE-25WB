// operators
// arithmetic operators: +, -, *, /, %
var a = 100; var b = 13; var c = 10; var linebreak = "<br>";
document.write("a = "); document.write(a);
document.write(linebreak);
document.write("b = "); document.write(b);
document.write(linebreak);
document.write("c = "); document.write(c);
document.write(linebreak);
document.write("a + b + c = "); 
result = a + b + c;
document.write(result);
document.write(linebreak);
document.write("a + b = "); 
result = a + b;
document.write(result);
document.write(linebreak);
document.write("a - b = "); 
result = a - b;
document.write(result);
document.write(linebreak);
document.write("a / b = "); 
result = a / b;
document.write(result);
document.write(linebreak);
document.write("a % b = "); 
result = a % b;
document.write(result);
document.write(linebreak)

//comparison operators: ==, ===, !=, !==, >, <, >=, <=
var a = 10; 
var b = 20; 
document.write("a = "); document.write(a);
document.write(linebreak);
document.write("b = "); document.write(b);
document.write(linebreak);
var linebreak = "<br />"; 
document.write("(a == b) => "); 
result = (a == b); 
document.write(result); 
document.write(linebreak); 
document.write("(a < b) => "); 
result = (a < b); 
document.write(result); 
document.write(linebreak); 
document.write("(a > b) => "); 
result = (a > b); 
document.write(result); 
document.write(linebreak); 
document.write("(a != b) => "); 
result = (a != b); 
document.write(result); 
document.write(linebreak); 
document.write("(a >= b) => "); 
result = (a >= b); 
document.write(result); 
document.write(linebreak); 
document.write("(a <= b) => "); 
result = (a <= b); 
document.write(result); 
document.write(linebreak);
document.write("(a === b) => ");
result = (a === b);
document.write(result);
document.write(linebreak);
document.write("(a !== b) => ");
result = (a !== b);
document.write(result);
document.write(linebreak);

//assignment operators: =, +=, -=, *=, /=, %=
var a = 40; 
var b = 20; 
var linebreak = "<br />"; 
document.write("a = "); document.write(a);
document.write(linebreak);
document.write("b = "); document.write(b);
document.write(linebreak);
document.write("Value of a => (a = b) => "); 
result = (a = b); 
document.write(result); 
document.write(linebreak); 
document.write("Value of a => (a += b) => "); 
result = (a += b); 
document.write(result); 
document.write(linebreak); 
document.write("Value of a => (a -= b) => "); 
result = (a -= b); 
document.write(result); 
document.write(linebreak); 
document.write("Value of a => (a *= b) => "); 
result = (a *= b); 
document.write(result); 
document.write(linebreak); 
document.write("Value of a => (a /= b) => "); 
result = (a /= b); 
document.write(result); 
document.write(linebreak); 
document.write("Value of a => (a %= b) => "); 
result = (a %= b); 
document.write(result); 
document.write(linebreak);

//logical operators: &&, ||, !
var a = 10; 
var b = 20; 
var linebreak = "<br />";
document.write("a = "); document.write(a);
document.write(linebreak);
document.write("b = "); document.write(b);
document.write(linebreak);
document.write("(a > 5 && b > 15) => "); 
result = (a > 5 && b > 15);
document.write(result);
document.write(linebreak);
document.write("(a > 15 || b > 15) => ");
result = (a > 15 || b > 15);
document.write(result);
document.write(linebreak);  
document.write("!(a > 5) => ");
result = !(a > 5);
document.write(result);
document.write(linebreak);  

// ternary operator: condition ? expression1 : expression2
// example 1
var age = 20;
document.write("age = "); document.write(age);
document.write(linebreak);

var status = age >= 18 ? "Adult" : "Minor";

console.log(status); 
document.write("status = "); document.write(status);
document.write(linebreak);

// example 2
var score = 85;
document.write("score = "); document.write(score);
document.write(linebreak);
var grade = score >= 90 ? "A" 
          : score >= 80 ? "B" 
          : score >= 70 ? "C" 
          : "F";

console.log(grade);
document.write("grade = "); document.write(grade);
document.write(linebreak);

