const app = "I don't do much."

function destructivelyAppendKitten(name){
  //appends a kitten to the end of the kittens array
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  //prepends a kitten to the beginning of the kittens array:
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  //removes the last kitten from the kittens array
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  //removes the First kitten from the kittens array
  return kittens.shift();
}

function appendKitten(name){
  //prepends a kitten to the kittens array and returns a new array, leaving the kittens array
  return [...kittens, name];
}

function prependKitten(name){
  //prepends a kitten to the kittens array and returns a new array, leaving the kittens array
  return [name, ...kittens];
}

function removeLastKitten(){
  //removes the last kitten in the kittens array and returns a new array, leaving the kittens
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(){
  //removes the first kitten from the kittens array and returns a new array, leaving the kitt
  return kittens.slice(1);
}
