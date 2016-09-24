const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}

function appendKitten(name){
  var newKitten = [...kittens,name];
  return newKitten;
}

function prependKitten(name){
  var newKitten = [name,...kittens];
  return newKitten;
}

function removeLastKitten(){
  return kittens.slice(0,-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
