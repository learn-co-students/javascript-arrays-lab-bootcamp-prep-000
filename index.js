const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeFirstKitten(){
  kittens.unshift;
  return kittens;
}

function destructivelyAppendKitten(name){
  kittens = [...kittens, name]
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens = [name, ...kittens]
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function destructivelyRemoveLastKitten() {
    kittens.pop();
    return kittens
}

function removeFirstKitten(){
  return kittens.slice(1);
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}
