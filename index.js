const app = "I don't do much."

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
  var newKittenAtEnd = [...kittens, name];
  return newKittenAtEnd;
}

function prependKitten(name){
  var newKittenAtStart = [name, ...kittens];
  return newKittenAtStart;
}

function removeLastKitten(){
  var lastKittenRemoved = kittens.slice(0, kittens.length-1)
  return lastKittenRemoved;
}

function removeFirstKitten(){
  var firstKittenRemoved = kittens.slice(1);
  return firstKittenRemoved;
}
