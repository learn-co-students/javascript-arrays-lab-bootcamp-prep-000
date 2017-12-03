const app = "I don't do much."

const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  let lastKitten = kittens.slice(0,kittens.length-1);
  return lastKitten;
}

function removeFirstKitten(){
  let newKittens = kittens.slice(1);
  return newKittens;
}
