const app = "I don't do much."


var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  var arrayB = kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  var arrayB = kittens.shift()
  return kittens;
}

function appendKitten(name){
  var arrayB = kittens.slice();
  arrayB.push(name);
  return arrayB;
}

function prependKitten(name){
  var arrayB = kittens.slice();
  arrayB.unshift(name);
  return arrayB;
}

function removeLastKitten(){
  var arrayB = kittens.slice();
  arrayB.pop();
  return arrayB;
}

function removeFirstKitten(){
  var arrayB = kittens.slice();
  arrayB.reverse();
  arrayB.pop();
  arrayB.reverse();
  return arrayB;
}