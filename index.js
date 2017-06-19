const app = "I don't do much.";

var kittens = ['Milo', 'Othis', 'Garfield'];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newKitten = [...kittens,name];
  return newKitten;
}

function prependKitten(name) {
  var newKitten = [name, ...kittens];
  return newKitten;
}

function removeLastKitten() {
   var newKitten = kittens.slice(0,-1);
   return newKitten;
}

function removeFirstKitten() {
   var newKitten = kittens.slice(-2);
   return newKitten;
}
