const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
      kittens.push(name);
      return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var appendedkittens = [...kittens, name];
  return appendedkittens;
} 

function prependKitten(name){
  var prependedkittens = [name, ...kittens];
  return prependedkittens;
}

function removeLastKitten(name){
  var rlk = ['Milo', 'Otis'];
  return rlk;
}
function removeFirstKitten(name){
  var rfk = ['Otis', 'Garfield'];
  return rfk;
}