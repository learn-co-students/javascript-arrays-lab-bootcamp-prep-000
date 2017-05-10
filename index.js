const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

function appendKitten(name){
  var one = [...kittens];
  one.push(name);
  return one;
}

function prependKitten(name){
  var one = [...kittens];
  one.unshift(name);
  return one;
}

function removeLastKitten(name){
  var one = [...kittens];
  one.pop(name);
  return one;
}

function removeFirstKitten(name){
  var one = [...kittens];
  one.shift(name);
  return one;
}
