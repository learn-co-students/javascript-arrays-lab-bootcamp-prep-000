const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
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
  var newArray = kittens.slice(0, -1);
  return newArray;
}

function removeFirstKitten(name){
  var newArray = kittens.slice(1);
  return newArray;
}
