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
  var newArray = kittens.slice();
  newArray.push(name);
  return newArray;
}

function prependKitten(name){
  var newKittenArray = kittens.slice();
  newKittenArray.unshift(name);
  return newKittenArray;
}

function removeLastKitten(){
  var newKittenArray = kittens.slice(0, -1);
  return newKittenArray;
}

function removeFirstKitten(){
  var newKittenArray = kittens.slice(1);
  return newKittenArray;
}
