function findCharacterWithHighestCount(inputString) {
  if (!inputString.length) throw new Error("Invalid Input");

  let characterCount = {};
  for (let i = 0; i < inputString.length; i++) {
    if (Object.keys(characterCount).includes(inputString[i])) {
      // if character exist, increment count
      characterCount[inputString[i]]++;
    } else {
      // else create new character key with count 1
      characterCount[inputString[i]] = 1;
    }
  }

  // return key with highest count
  return Object.keys(characterCount).reduce((a, b) =>
    characterCount[a] > characterCount[b] ? a : b
  );
}

// USAGE

let x = "abaabaa";
console.log(findCharacterWithHighestCount(x));
