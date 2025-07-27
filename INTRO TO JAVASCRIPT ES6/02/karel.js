/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main() {
  beep3to2();
  beep3to2();
  beepThree();
}
function beepThree() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}
function turningLeft() {
  turnLeft();
  move();
}
function beepTwo() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  turnRight();
  move();
  turnRight();
}
function beep3to2() {
  beepThree();
  turningLeft();
  turningLeft();
  beepTwo();
}
