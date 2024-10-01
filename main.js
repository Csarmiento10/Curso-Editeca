let setExample=new Set();
setExample.add(5);
setExample.add('cadena');
let person = {name: "Ramon", age: "20"};
setExample.add(person);
console.log(setExample.has('cadena'));