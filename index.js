var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here

function destructivelyAppendKitten(Ralph){
  return kittens.push(Ralph);
}
function destructivelyPrependKitten(Bob){
   return kittens.unshift(Bob);
}
function destructivelyRemoveLastKitten(Garfield){
  return kittens.pop(Garfield);
}
function destructivelyRemoveFirstKitten(Milo){
  return kittens.shift(Milo);
}
function appendKitten(Broom){
return  [...kittens, "Broom"];
}
function prependKitten(Arnold){ 
  return ["Arnold", ...kittens];
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length -1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}











