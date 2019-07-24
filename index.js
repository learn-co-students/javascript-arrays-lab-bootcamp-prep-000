var kittens = ["Milo", "Otis", "Garfield"];
//define your array here
// Add your functions and code here

function destructivelyAppendKitten() {
  kittens.push('Ralph');
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten() {
  var array =[...kittens, "Broom"];
  return array;
}

function prependKitten() {
  var array1 = ["Arnold", ...kittens];
  return array1;
}

function removeLastKitten() {
  var array2 = kittens.slice(0, 2);
  return array2;
}

function removeFirstKitten() {
  var array3 = kittens.slice(1);
  return array3;
}