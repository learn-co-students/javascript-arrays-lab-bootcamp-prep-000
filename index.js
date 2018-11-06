var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten() {
 kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten() {
 kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {
 kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
 kittens.shift();
  return kittens;
}

function appendKitten() {
  var kittensNew = kittens.concat('Broom');
  return kittensNew;
}

function prependKitten() {
var kittenNew = ['Arnold', ...kittens];
return kittenNew;
  }

function removeLastKitten() {
  var kittenNew = kittens.slice(0, 2);
  return kittenNew;
  }
  
function removeFirstKitten() {
  var kittenNew = kittens.slice(1);
  return kittenNew;
  }