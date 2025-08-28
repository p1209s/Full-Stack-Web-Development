var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("Button clicked!");
  });
}

// document.querySelector("button").addEventListener("click", handleCLick);

// function handleCLick() {
//   alert("Button clicked!");
// }
