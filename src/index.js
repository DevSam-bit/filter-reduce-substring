import emojipedia from "./emojipedia";
//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

// substring -  returns the part of the string between the start and end indexes, or to the end of the string.

var numbers = [3, 56, 2, 48, 5];

const newNum = numbers.find(function (num) {
  return num > 10;
});

console.log(newNum);

const newData = numbers.findIndex(function (nums) {
  return nums > 10;
});

console.log(newData);

const newEntry = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 50);
});

console.log(newEntry);
