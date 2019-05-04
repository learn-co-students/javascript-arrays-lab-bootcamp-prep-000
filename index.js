var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  let kitkat = kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  let kitkat = kittens.shift();
  return kittens;
}

function appendKitten(name){
  let newKitten = [...kittens, name];
  return newKitten;
}

function prependKitten(name){
  let newKitten = [name, ...kittens];
  return newKitten;
}

function removeLastKitten(){
  let newKitten = kittens.slice(0, kittens.length - 1);
  return newKitten;
}

function removeFirstKitten(){
  let newKitten = kittens.slice(1);
  return newKitten;
}