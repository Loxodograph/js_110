/*
Create function that takes nonempty string argument
return array consisting of string and integer

string === substring * integer

substring should be shortest possible
integer should be largest possible

create function repeatedSubstring takes string as argument
let count = 0;
let finalSubstring = ""
iterate over elements of string
  iterate over next elements of string
    let substring = string sliced from start to end
    while substring repeated count times doesnt equal string
      count++
      if string does not include substring repeated count times
        break
    if substring repeated count times equals string
      finalSubstring equals substring
return finalSubstring and count
*/
function repeatedSubstring(str) {
  let count = 0;

  for (let start = 0; start < str.length - 1; start++) {
    for (let end = start; end < str.length; end++) {
      let substring = str.slice(start, end + 1);
      while (substring.repeat(count) !== str) {
        count++;
        if (substring.repeat(count).length > str.length) {
          count = 0;
          break;
        }
      }
      if (substring.repeat(count) === str) {
        return [substring, count];
      }
    }
  }

}
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));