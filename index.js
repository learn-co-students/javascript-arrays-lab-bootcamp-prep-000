const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten (sisi) {
  kittens.push(sisi);
  
}

function destructivelyPrependKitten (sisi) {
  kittens.unshift(sisi);
  
}

function destructivelyRemoveLastKitten (sisi) {
  kittens.pop(sisi);
  
}

function destructivelyRemoveFirstKitten (sisi) {
  kittens.shift(sisi);
  
}

function appendKitten(sisi) {
  
  return [...kittens, sisi];
}

function prependKitten(sisi) {
  
  return [sisi, ...kittens];
}

function removeLastKitten () {

 return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten () {
  
  return kittens.slice(1);
}