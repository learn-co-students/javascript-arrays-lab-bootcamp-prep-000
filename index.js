var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
 kittens.push(name);
 return kittens;
}
function destructivelyPrependKitten(name){
 return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
  return kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name) ;
}
function appendKitten(name){
  return kittens.concat(name);
}
function prependKitten(name){
  return [name, ...kittens];
}
function removeLastKitten(name){
    return kittens.slice(0,kittens.length-1);
}
function removeFirstKitten(){
    return kittens.slice(1)
}






