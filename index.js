const app = "I don't do much."
function kittens(){
var  kittens = [
  'Milo',
  'Otis',
  'Garfield'
];
}
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  var newKitten = kittens.slice(0, 2)
  return newKitten
}

function removeFirstKitten(){
return kittens.slice(1)
}
