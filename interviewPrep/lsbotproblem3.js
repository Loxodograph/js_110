/*
Write a function that takes an object and a string as arguments.
The string will be a path to a property in the object,
with each level separated by dots. The function
should return the value of the property at the end
of this path. If the path is invalid, return undefined.

*/

function getNestedProperty(obj, path) {
  let resultObj = obj;
  let pathArray = path.split(".");
  for (let idx = 0; idx < pathArray.length; idx++) {
    if (resultObj[pathArray[idx]]) {
      resultObj = resultObj[pathArray[idx]];
    } else {
      return undefined;
    }
  }
  return resultObj;
}

let obj = {
  a: {
    b: {
      c: 42
    }
  },
  x: {
    y: 'z'
  }
};

console.log(getNestedProperty(obj, 'a.b.c'));     // 42
console.log(getNestedProperty(obj, 'x.y'));       // 'z'
console.log(getNestedProperty(obj, 'a.b.d'));     // undefined
console.log(getNestedProperty(obj, 'p.q.r'));     // undefined