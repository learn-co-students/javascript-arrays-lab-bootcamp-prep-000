const app = "I don't do much.";

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var newKittens = [name, ...kittens];
  return newKittens;
}

function prependKitten(name){
  var newKittens = [...kittens, name];
  return newKittens;
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1, kittens.length);
  return newKittens;
}

destructivelyAppendKitten('Ralph')
console.log(kittens)
