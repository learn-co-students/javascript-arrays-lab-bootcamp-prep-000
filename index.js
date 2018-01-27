const app = "I don't do much.";

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens;
}

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

function appendKitten(name){
  var newKitten = [...kittens, name];
  return newKitten;
}

function prependKitten(name){
  var newKitten = [name, ...kittens];
  return newKitten;
}

function removeLastKitten(){
  var newKitten = kittens.slice(0, -1);
  return newKitten;
}

function removeFirstKitten(){
  var newKitten = kittens.slice(1);
  return newKitten;
}





