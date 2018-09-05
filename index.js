// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}
destructivelyAppendKitten("bob")

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}
destructivelyPrependKitten("bob")

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  let arr = [...kittens, name]; 
  return arr;
}

function prependKitten(name){
  let arr = [name, ...kittens]
  return arr;
}

function removeLastKitten(name){
  let arr = kittens.slice(0, kittens.length - 1)
  return arr;
}

function removeFirstKitten(name){
  let arr = name.slice(0);
  return arr;
}

