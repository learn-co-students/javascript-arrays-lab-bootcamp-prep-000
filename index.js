const app = "I don't do much."
const kittensValue = ["Milo","Otis","Garfield"];
var kittens = kittensValue;
function destructivelyAppendKitten(element) {
  kittens.push(element);
}
function destructivelyPrependKitten(element){
  kittens = [element,...kittensValue];
}
function destructivelyRemoveLastKitten(){
  kittens = [...kittensValue];
  kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens=[...kittensValue];
  kittens.shift();
}
function removeLastKitten(){
  var answer =[...kittensValue];
  answer.pop();
  return answer;
}
function removeFirstKitten(){
  var answer =[...kittensValue];
  answer.shift();
  return answer;
}
function appendKitten(name){
  kittens = [...kittensValue];
  return [...kittensValue,name];
}
function prependKitten(name){
  kittens = [...kittensValue];
  return [name,...kittensValue];
}
