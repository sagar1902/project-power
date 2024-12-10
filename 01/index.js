const measureExecutionTime = require("../extras/executon_time");

function findLongestString(arrayOfStrings) {
  if (!arrayOfStrings.length) {
    throw new Error("Empty Array");
  }

  let longestStringIndex = 0;
  arrayOfStrings.forEach((element, index) => {
    if (arrayOfStrings[longestStringIndex].length < element.length) {
      longestStringIndex = index;
    }
  });
  return arrayOfStrings[longestStringIndex];
}

// USAGE

const x = ["apple", "mango", "orange", "watermelon"];
console.log(findLongestString(x));

// // EXECUTION TIME
// const timedFn = measureExecutionTime(findLongestString);
// const result = timedFn(x);
// console.log(result);
