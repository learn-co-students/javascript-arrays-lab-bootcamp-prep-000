const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten( Ralph ){
  kittens.push("Ralph");
  return kittens;
}
function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(Broom){
  var Broom = [...kittens , "Broom"];
  return Broom;
}
function prependKitten(Arnold){
  var Arnold = ["Arnold", ...kittens];
  return Arnold;
}
function removeLastKitten(){
  var one = [...kittens.slice(0,2), ...kittens.slice(3)];
  return one;
}
function removeFirstKitten(){
  var two = kittens.slice(1)
  return two;
}
