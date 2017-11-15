const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function prependKitten(name){
  let newKittens = [name, ...kittens];
  return newKittens;
}

function appendKitten(name){
  let newKittens = [...kittens, name];
  return newKittens;
}

function removeLastKitten(){
  let newKittens = kittens.slice(0, kittens.length -1);
  return newKittens;
}

function removeFirstKitten(){
  let newKittens = kittens.slice(1);
  return newKittens;
}
