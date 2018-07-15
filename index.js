var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten () {
  kittens.push("Ralph");
} 

function destructivelyPrependKitten () {
  kittens.unshift("Bob");
} 

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}


function destructivelyRemoveLastKitten () {
  kittens.pop();
} 

function appendKitten (name) {
 return [...kittens, name];
} 

function prependKitten (name) {
 return [name, ...kittens];
} 

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}