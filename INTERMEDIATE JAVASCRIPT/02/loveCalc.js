prompt("Enter your name here: ");
prompt("Enter their name here: ");
var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100) + 1;

if (loveScore > 80) {
  alert(
    "Your love score is: " +
      loveScore +
      "%. Your love is like Romeo and Juliet."
  );
} else {
  alert("Your love score is : " + loveScore + "%");
}
