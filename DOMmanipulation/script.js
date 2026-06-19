//addition of element in html
const newElement = document.createElement("p");
newElement.innerText = "This is a new element";
document.body.appendChild(newElement);

//addition of element at specific position
const newElement2 = document.createElement("p");
newElement2.innerText = "This is another new element";
const referenceElement = document.getElementById("para");
document.body.insertBefore(newElement2, referenceElement);

//removal of element
const elementToRemove = document.getElementById("para2");
document.body.removeChild(elementToRemove);

//modification of element
const elementToModify = document.getElementById("para");
elementToModify.innerText = "This is the modified text";

//modification of element style
const elementToStyle = document.getElementById("para");
elementToStyle.style.color = "red";
elementToStyle.style.fontSize = "20px";