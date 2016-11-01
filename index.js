const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}


function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0,-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
