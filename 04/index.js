

function checkPalindrome(inputString) {
  if (!inputString.length) throw new Error("Invalid String");

  const stringLength = inputString.length;

  for (let i = 0; i < Math.ceil(stringLength / 2); i++) {
    if (inputString[i] !== inputString[stringLength - i - 1]) return false;
  }

  return true;
}

// USAGE

// pass string in program call node 04 palindrome-string
let x = process.argv[2] || "ababa";
console.log(checkPalindrome(x));
