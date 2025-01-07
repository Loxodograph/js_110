function capToFront(string) {
  let finalString = string.match(/[A-Z]/g).join("") + string.match(/[a-z]/g).join("");
  return finalString;
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));