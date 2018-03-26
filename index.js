const app = "I don't do much.";

var kittens = ['garfield', 'hello', 'grumpy']

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name){
  var newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, -1);
  return newKittens;

}

function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
}
