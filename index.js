const app = "I don't do much."
const kittensValue = ['Milo', 'Otis', 'Garfield'];
var kittens = kittensValue;
function destructivelyAppendKitten(element){
  kittens.push(element);
}
function destructivelyPrependKitten(element){
  kittens = [element, ...kittensValue]
}
function destructivelyRemoveLastKitten(){
  kittens = [...kittensValue];
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens = [...kittensValue];
  kittens.shift();
}
function appendKitten(name){
  kittens = [...kittensValue];
  return [...kittensValue,name];
}
function prependKitten(name){
  kittens =  [...kittensValue];
  return [name,...kittensValue];
}
function removeLastKitten(){
  var result = [...kittensValue]
  result.pop();
  return result;
}
function removeFirstKitten(){
  var result = [...kittensValue];
  result.shift();
  return result;
}
