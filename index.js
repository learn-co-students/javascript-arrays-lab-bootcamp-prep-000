var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
};

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  var result = [...kittens, name];
  return result;
}

function prependKitten(name){
  var result = [name, ...kittens];
  return result;
}

function removeLastKitten(name){
  var result = kittens.slice(0, kittens.length -1);
  return result;
}

function removeFirstKitten(name){
  var result = kittens.slice(1);
  return result;
}
