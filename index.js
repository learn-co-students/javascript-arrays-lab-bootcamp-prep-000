const app = "I don't do much.";
function destructivelyAppendKitten(Ralph){
  return kittens.push(Ralph);
}
function destructivelyPrependKitten(Bob){
  return kittens.unshift(Bob);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop(-1);
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift(0);
}
function appendKitten(Broom){
  return [...kittens, Broom];
}
function prependKitten(Garfield){
  return [Garfield, ...kittens];
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten(){
  return kittens.slice(1);
}