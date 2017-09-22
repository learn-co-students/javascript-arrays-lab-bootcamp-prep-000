const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name,myArray){
  kittens.push(name);
  return myArray;
}

function destructivelyPrependKitten(name,myArray){
  kittens.unshift(name);
  return myArray;
}

function destructivelyRemoveLastKitten(name,myArray){
  kittens.pop();
  return myArray;
}

function destructivelyRemoveFirstKitten(name,myArray){
  kittens.shift();
  return myArray;
}

function appendKitten(name,myArray){
   return [...kittens, name];
}

function prependKitten(name,myArray){
  return [name, ...kittens]
}

function removeLastKitten(name,myArray){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(name,myArray){
  return kittens.slice(1)
}
