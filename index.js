var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  // appends a kitten to the end of the array
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  // prepends a kitten to the beginning of the kittens array
 kittens.unshift(name);
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

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
 return [name, ...kittens]; 
}

function removeLastKitten() {
  // removes last kitty, returns new array, original kittens unchanged
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten() {
  // removes firsy kitty, returns new array, original kittens unchanged
  return kittens.slice(1);
}