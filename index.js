const app = "I don't do much"
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(element){
  kittens.push(element);
  return kittens

}

function destructivelyPrependKitten(element){
  kittens.unshift(element);
  return kittens;
}

function destructivelyRemoveLastKitten(element){
  kittens.pop(element);
  return kittens;
}

function destructivelyRemoveFirstKitten(element){
  kittens.shift(element);
  return kittens
}

function appendKitten(element){
  return [...kittens, element];
}

function prependKitten(element){
  return [element, ...kittens]
}

function removeLastKitten(element){
  return kittens.slice(0, kittens.length  - 1);
}

function removeFirstKitten(){
  return kittens.slice(1, kittens.length);
}
