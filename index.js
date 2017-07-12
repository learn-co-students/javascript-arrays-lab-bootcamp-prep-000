const app = "I don't do much."

function destructivelyAppendKitten(name){
   kittens.push(name);
   return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}
/*
destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
*/

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  kittens.slice(0, kittens.length -1)
  kittens = kittens.slice(0, kittens.length-1);
  return kittens
}
/*
function removeFirstKitten(){
  kittens.slice();
  kittens = kittens.slice();
  return kittens
}
*/
