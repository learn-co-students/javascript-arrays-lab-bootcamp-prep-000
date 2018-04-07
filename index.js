const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(Ralph){
  kittens.push("Ralph");
  return kittens;
}
function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop(0, kittens.length -1);
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift(0);
  return kittens;
}
function appendKitten(Broom){
  var newKittenArray = [...kittens];
  newKittenArray.push(Broom);
  return newKittenArray;
}
function prependKitten(Arnold){
  var newKittenArray = [...kittens];
  newKittenArray.unshift(Arnold);
  return newKittenArray;
}
function removeLastKitten(){
  var newKittenArray  = [...kittens]
  newKittenArray.pop(0, kittens.length -1);
  return newKittenArray;
}
function removeFirstKitten(){
  var newKittenArray = [...kittens];
  newKittenArray.shift(0);
  return newKittenArray;
}