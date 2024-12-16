

function generateFibonacci(sequenceLength) {
  if (sequenceLength < 1) throw new Error("Invalid input");

  if (sequenceLength == 1) return [0]

  let sequence = [0, 1];

  for (let i = 2; i < sequenceLength; i++) {
    sequence.push(sequence[i-1]+sequence[i-2])
  }

  return sequence;
}

// USAGE

// pass string in program call node 05 sequence-length
let x = process.argv[2] || 1;
console.log(generateFibonacci(x).join(' '));
