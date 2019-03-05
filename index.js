
var kittens = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
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
  var kittensNew = [...kittens, "Broom"];
  return kittensNew;
}

function prependKitten(name) {
  var kittensNew = ["Arnold", ...kittens];
  return kittensNew;
}

function removeFirstKitten() {
  var kittensNew = kittens.slice(1,3);
  return kittensNew;
}

function removeLastKitten() {
  var kittensNew = kittens.slice(0,2);
  return kittensNew;
}

//var cities = ["New York", "San Francisco"]
 
// we can assign it to the existing `cities` variable
// cities = ["Philadelphia", ...cities]