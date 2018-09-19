let kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveKitten(){
  kittens.pop();
}

function destructivelyRemoveLastKitten(){
  kittens.pop(kittens.length-1);
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  let kittens2 = [...kittens, name];
  return kittens2;
}

function prependKitten(name){
  let kittens2 = [name, ...kittens];
  return kittens2;
}

function removeLastKitten(){
  let kittens2 = kittens.slice(0,-1);
  return kittens2;
  
}

function removeFirstKitten(){
  let kittens2 = kittens.slice(1);
  return kittens2;
}