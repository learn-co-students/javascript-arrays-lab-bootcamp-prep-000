const app = "I don't do much."
const kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name){
  let myKittens = kittens;
  return myKittens.push(name);
}

function destructivelyPrependKitten(name){
  let myKittens = kittens;
  return myKittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  let myKittens = kittens;
  return myKittens.pop();
}

function destructivelyRemoveFirstKitten(){
  let myKittens = kittens;
  return myKittens.shift();
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0, -1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}