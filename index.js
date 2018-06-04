const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  var moreKittens = kittens.push(name);
  return moreKittens;
}

function destructivelyPrependKitten(name){
  var moreKittensInFront = kittens.unshift(name);
  return moreKittensInFront;
}

function destructivelyRemoveLastKitten(){
  var adoptedKitten = kittens.pop();
  return adoptedKitten;
}

function destructivelyRemoveFirstKitten(){
  var adoptedKittenFirst = kittens.shift();
  return adoptedKittenFirst;
}

function appendKitten(name){
  var newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten(name){
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}
function removeFirstKitten(name){
  var newArray = kittens.slice(1);
  return newArray;
}