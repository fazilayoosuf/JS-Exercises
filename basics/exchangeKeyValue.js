const arr = [
  {name: 'manoj', age: 25},
  {name: 'john', age: 22},
]


function transformName() {
  let tA = arr.map(ele => ele.name.toUpperCase());
  return tA;
}

function transformAge() {
  let tAge = arr.map(ele => ele.age.toString());
  return tAge;
}

console.log(transformName())
console.log(transformAge())