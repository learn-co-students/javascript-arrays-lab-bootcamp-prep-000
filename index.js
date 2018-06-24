const app = "I don't do much."
function destructivelyAppendKitten(kitty){
  kittens.push(kitty);
}

function destructivelyPrependKitten(kitty){
  kittens.unshift(kitty);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(kitty){
  var newkittens = [...kittens, kitty];
  return newkittens
}

function prependKitten(kitty){
  var newkittens = [kitty, ...kittens];
  return newkittens
}

function removeLastKitten(){
  var newkittens = kittens.slice(0, kittens.length - 1);
  return newkittens
}

function removeFirstKitten(){
  var newkittens = kittens.slice(1);
  return newkittens
}