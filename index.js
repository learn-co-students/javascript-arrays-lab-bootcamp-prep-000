const app = "I don't do much."

// Destructively appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

// destructivelyPrependKitten(name) prepends a kitten to the beginning of the kittens array

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

// Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens;
}

//destructivelyRemoveFirstKitten() removes the First kitten from the kittens array

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

// appendKitten(name) appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:

function appendKitten(name){
  const newKitten = [...kittens, name];
  return newKitten;
}

// prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function prependKitten(name){
  const newKitten = [name, ...kittens];
  return newKitten;
}

//removeLastKitten() removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged:
function removeLastKitten(){
  var newKitten = kittens;
  return newKitten.slice(0, kittens.length - 1);
}

// Arrays removeFirstKitten() removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged:
function removeFirstKitten(){
  var newKitten = kittens;
  return newKitten.slice(1);
}
