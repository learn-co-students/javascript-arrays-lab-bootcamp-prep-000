var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var copyKittens = kittens.slice();
  copyKittens.push(name);
  return copyKittens;
}

function prependKitten(name){
  var copyKittens = kittens.slice();
  copyKittens.unshift(name);
  return copyKittens
}

function removeLastKitten(){
  var copyKittens = kittens.slice();
  copyKittens.pop()
  return copyKittens;
}

function removeFirstKitten(){
  var copyKittens = kittens.slice();
  copyKittens.shift();
  return copyKittens
}