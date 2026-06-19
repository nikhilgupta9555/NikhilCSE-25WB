//1st
const x = document.getElementById("para");
console.log(x);
console.log(x.innerText);


//2nd
const y = document.getElementsByClassName("text");
console.log(y);

// one by one access 
console.log(y[0].innerText);
console.log(y[1].innerText);

//3rd
const z = document.getElementsByTagName("p");
console.log(z);

console.log(z[0].innerText);
console.log(z[1].innerText);

//4th
//  select by id
const a = document.querySelector("#para2");
console.log(a.innerText);

// select by class (only first element)
const b = document.querySelector(".text");
console.log(b.innerText);

// select by tag
const c = document.querySelector("p");
console.log(c.innerText);

//5th
const d = document.querySelectorAll(".text");

console.log(d);

// one by one access individual element
console.log(d[0].innerText);
console.log(d[1].innerText);
console.log(d[2].innerText);