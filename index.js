const app = "I don't do much."

var kitten = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kitten
}

function destructivelyRemoveLastKitten(){
  kittens.pop;
  return kittens
}

function destructivelyRemoveFirstKitten(kitten){
  kitten.shift;
  return kitten
}

function appendKitten(kitten, name){
  return [...kitten,name]
}

function prependKitten(kitten, name){
  return [name,...kitten]
}

function removeFirstKitten(kitten){
  return kitten.slice(1)
}

function removeLastKitten(kitten){
  return kitten.slice(0,kitten.length-1)
}
