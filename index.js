const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return destructivelyAppendKitten;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return destructivelyPrependKitten;
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten(){
    return kittens.pop();
}

var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyRemoveFirstKitten(){
    return kittens.shift();
}

var kittens = ["Milo", "Otis", "Garfield"];

function appendKitten(name) {
  var newvar = [...kittens];
  newvar.push(name);
  return newvar;
}

function prependKitten(name) {
  var newvar = [...kittens];
  newvar.unshift(name);
  return newvar;
}

function removeLastKitten(){
  var newvar = kittens.slice(0, kittens.length-1);
  return newvar;
}

function removeFirstKitten(){
    var newvar = kittens.slice(1);
  return newvar;
}