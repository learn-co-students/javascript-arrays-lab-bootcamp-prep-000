const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  var newArray = kittens.push(name);
  return newArray;
}
function destructivelyPrependKitten(name){
  var newArray = kittens.unshift(name);
  return newArray;
}
function destructivelyRemoveLastKitten(){
  var newArray = kittens.pop(name);
  return newArray;

}
function destructivelyRemoveFirstKitten(){
  var newArray = kittens.shift(name);
  return newArray;
}
function appendKitten(name){
  var newArray = [...kittens, name]
  return newArray;
}
function prependKitten(name){
  var newArray = [name, ...kittens]
  return newArray;
}
function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray;
}
function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray;
}
