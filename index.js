const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(elem){
  kittens.push(elem);
}

function destructivelyPrependKitten(elem){
  kittens.unshift(elem);
}
function destructivelyRemoveLastKitten(elem){
  kittens.pop(elem);
}

function destructivelyRemoveFirstKitten(elem){
  kittens.shift(elem);
}

function appendKitten(elem){
  const newKitt = [...kittens, elem];
  return newKitt;
}

function prependKitten(elem){
  const newStuff = [elem, ...kittens];
  return newStuff;
}

function removeFirstKitten(elem){
  var kitts = kittens.slice(1);
  return kitts;
}

function removeLastKitten(elem){
  var kitt = kittens.slice(0, kittens.length - 1)
  return kitt;
}
