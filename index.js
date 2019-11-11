// Code your solution here!

function printString() {

  console.log(myString[0]);
  
  if (myString.length >1) {
    let mySubString = myString.substring(1, myString.length);
    pringString(mySubString);
  }
  else {
    return true;
  }
}