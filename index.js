var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  window.kittens= [...window.kittens, name];
}

function destructivelyPrependKitten(name) {
  window.kittens= [name, ...window.kittens];
}

function destructivelyRemoveLastKitten() {
  window.kittens.pop();
  return window.kittens;
}

function destructivelyRemoveFirstKitten() {
  window.kittens.shift();
  return window.kittens;
}

function appendKitten(name) {
  var a=window.kittens.slice(0);
  a.push(name);
  return a;
}

function prependKitten(name) {
  return [name, ...window.kittens];
}

function removeLastKitten() {
  var a=window.kittens.slice(0);
  a.pop();
  return a;
}

function removeFirstKitten() {
  var a=window.kittens.slice(0);
  a.shift();
  return a;
}