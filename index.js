const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push('Ralph');
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name){
  kittens = kittens.slice(1);
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return[name, ...kittens]
}

function removeLastKitten(name){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(name){
  return kittens.slice(1)
}
