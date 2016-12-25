const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  return kittens.unshift();
}
function destructivelyAppendKitten(name){
    return kittens.push(name);
}
function  destructivelyRemoveLastKitten(name){
    return kittens.pop();
}
function destructivelyRemoveFirstKitten(name){
    return kittens.shift();
}
function prependKitten(name){
   return [name,...kittens]
}
function appendKitten(name){
   return [...kittens,name];
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function removeLastKitten(name){
  return kittens.pop();
}
function removeFirstKitten(name){
  return kittens.slice(1);
}

function removeLastKitten(name){
  return kittens.slice(0,kittens.length  - 1);
}
