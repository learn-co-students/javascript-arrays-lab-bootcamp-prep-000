const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){

  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
[...kittens, name];
  return kittens
}
function prependKitten(name){

[name,...kittens];
  return kittens
}
function removeLastKitten() {
   kittens.slice(0, kittens.length - 1);
  return kittens
}

function removeFirstKitten() {
  kittens= kittens.slice(1);
  return kittens
}
