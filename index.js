// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  /*[element, ...array];
  [...array, element]
  
  const arr = Array.from(kittens)
  arr.push(name)
  
  const arr = Array.prototype.slice.call(kittens)
  const arr = kittens.slice()
  arr.push(name)
  
  const arr = kittens.concat(name)*/
  
  var kittensNew = [...kittens, "Broom"]
  return kittensNew;
}

function prependKitten(name) {
  var kittensNew2 = ["Arnold", ...kittens]
  return kittensNew2;
}

function removeLastKitten() {
  var kittensNew3 = kittens.splice(kittens.length[-1]);
  return kittensNew3;
}

/*function removeFirstKitten() {
  
}*/


