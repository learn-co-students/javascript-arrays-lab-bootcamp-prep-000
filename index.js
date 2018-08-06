// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten (element) {
 kittens.push(element); 
 return kittens;
}

function destructivelyPrependKitten (element) {
 kittens.unshift(element); 
 return kittens;
}

function destructivelyRemoveLastKitten () {
 kittens.pop(); 
 return kittens;
}

function destructivelyRemoveFirstKitten () {
 kittens.shift(); 
 return kittens;
}

function appendKitten (element) {
  let newKittens=[element];
  newKittens = kittens.concat(newKittens);
  return newKittens;
}

function prependKitten (element) {
  let newKittens=[element];
  newKittens = newKittens.concat(kittens);
  return newKittens;
}

function removeLastKitten () {
  let newKittens=kittens.slice(0,kittens.length-1);
  return newKittens;
}

function removeFirstKitten () {
  let newKittens=kittens.slice(1);
  return newKittens;
}

console.log(removeFirstKitten('seven'));
console.log(kittens);
