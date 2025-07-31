var guestName = prompt("Enter Your Name: ");

var guestList = ["Priyank", "Rakesh", "Suresh", "Paresh", "Naresh", "Mahesh"];

if (guestList.includes(guestName)) {
  alert("Welcome!");
} else {
  alert("Sorry, maybe next time.");
}
