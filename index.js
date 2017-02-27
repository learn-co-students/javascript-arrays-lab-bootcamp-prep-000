const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten () {
kittens.push("Ralph");
return kittens;
}

function destructivelyPrependKitten(name) {
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

function appendKitten(name) {
return[...kittens, "Broom"];
  //return kittens;
}

function prependKitten(name){
  return ["Arnold",...kittens];
}

function removeLastKitten() {
  var lgth = kittens.length;
return kittens.slice(0,lgth-1)  ;
}
function  removeFirstKitten()  {
return  kittens.slice(1);
}
