var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name) 
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop() 
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift() 
  return kittens;
}

function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  var newKitt = [name, ...kittens]
  return newKitt;
}

function removeLastKitten() {
  var newK = kittens.slice(0, kittens.length-1);
  return newK;
}

function removeFirstKitten() {
  var newKit = kittens.slice(1) 
  return newKit
}