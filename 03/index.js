function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let map = new Map();

  for (let i = 0; i < str1.length; i++) {
    if(map.has(str1[i])) {
      map.set(str1[i], map.get(str1[i])+1);
    } else {
      map.set(str1[i], 1);
    }

    if(map.has(str2[i])) {
      map.set(str2[i], map.get(str2[i])-1);
    } else {
      map.set(str2[i], -1);
    }
  }

  for (const [key, value] of map) {
    if (value !== 0) return false;
  }

  return true;
}


// USAGE

console.log(checkAnagram('listen', 'silent'))