

function generateRange(start, end) {
  start = parseInt(start)
  end = parseInt(end)
  if (!start || !end || start > end) throw new Error("Invalid input");

  if (start+1 == end) return [];
  if (start+2 == end) return [start+1];
  else {
    let range = generateRange(start, end-1)
    return [...range, end-1];
  }
}

// USAGE

// pass string in program call node 06 start-number end-number
let x = process.argv[2];
let y = process.argv[3];
console.log(generateRange(x, y));
