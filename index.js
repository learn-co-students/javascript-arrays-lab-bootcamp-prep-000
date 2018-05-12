const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
	kittens.push(name);
	return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens
}

function appendKitten(name){
  var newArray = [...kittens, name];
  return newArray
}

function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray
}

function removeLastKitten(){
  kittens = [kittens.length - 1]
  return kittens
}

function removeFirstKitten(){
  return kittens.slice(1);
}
