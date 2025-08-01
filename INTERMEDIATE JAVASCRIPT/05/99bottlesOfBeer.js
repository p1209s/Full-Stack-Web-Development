function beer() {
  var start = 99;
  var i = start;
  while (i > 0) {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
    i--;
    console.log(
      "Take one down and pass it around, " + i + " bottles of beer on the wall."
    );
  }
  console.log("No more bottles of beer on the wall, no more bottles of beer.");
  console.log(
    "Go to the store and buy some more, " + start + " bottles of beer."
  );
}
