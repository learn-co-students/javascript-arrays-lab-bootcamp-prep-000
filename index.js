const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function appendKitten(name){
  let newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name){
  let newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten(){
  let newKittens = kittens.slice(0, kittens.length -1);
  return newKittens;
}

function removeFirstKitten(){
  let newKittens = kittens.slice(1, kittens.length);
  return newKittens;
}