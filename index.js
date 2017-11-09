const app = "I don't do much."

function destructivelyAppendKitten(name){

  return kittens.push(name);
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}
function appendKitten(name){
  var newArr = [...kittens,name];
  return newArr;
}
function prependKitten(name){
  var newArr = [name,...kittens];
  return newArr;
}
function removeLastKitten(){
var newArr = [...kittens]
newArr.pop();
return newArr;
}
function removeFirstKitten(){
  var newArr = [...kittens]
  newArr.shift();
  return newArr;
}
