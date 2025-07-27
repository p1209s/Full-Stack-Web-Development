// var a = 140;
// var b = prompt("Enter text here: ");
// var c = b.slice(0,a)
// alert("You have entered " + b.length + " characters, you have " + (a-b.length) + " characters left");

// alert(c)
// alert("You have entered " + c.length + " characters, you have " + (a-c.length) + " characters left");

var name = prompt("Enter your name: ");
var firstChar = name.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCase();
var capitalizedName = upperCaseFirstChar + restOfName;
alert("Hello! " + capitalizedName);
