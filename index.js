const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens;
}

function appendKitten(name){
  return kittens.concat(name);
}

function prependKitten(name){
  var newArr = kittens.slice(0,kittens.length);
  newArr.unshift(name)
  return newArr
}

function removeLastKitten(){
  var newArr = kittens.slice(0,kittens.length)
  newArr.pop();
  return newArr;
}

function removeFirstKitten(){
  var newArr = kittens.slice(0,kittens.length)
  newArr.shift();
  return newArr;
}
