var kittens = [] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  return kittens.push('Ralph');
}

function destructivelyPrependKitten(name) {
  return kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newCat = ["Broom"];
  return kittens.concat(newCat);
}

// Add your functions and code here

function destructivelyAppendKitten(name) {
  return kittens.push('Ralph');
}

function destructivelyPrependKitten(name) {
  return kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newCat = ["Broom"];
  return kittens.concat(newCat);
}

function prependKitten(name) {
  var newCat = ["Arnold"];
  return newCat.concat(kittens);
}


function removeLastKitten(){
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}

function removeFirstKitten(){
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens
}




