var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.splice(kittens.length-1, 1)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var kittensArray = [...kittens]
  kittensArray.push(name);
  return kittensArray
}

function prependKitten(name){
  var kittensArray = [...kittens]
  kittensArray.unshift(name)
  return kittensArray;
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten(){
  return kittens.slice(1, kittens.length);
}

