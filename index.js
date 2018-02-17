const app = "I do do much."
function destructivelyAppendKitten(name){
 var int = kittens;
  int.push(name);
}
function destructivelyPrependKitten(name){
 var int = kittens;
  int.unshift(name);
}
function destructivelyRemoveLastKitten(){
 var int = kittens;
  int.pop();
}
function destructivelyRemoveFirstKitten(){
 var int = kittens;
  int.shift();
}
function appendKitten(name){
  var int = [].concat(kittens);
  int.push(name);
  return int;
}
function prependKitten(name){
  var int = [].concat(kittens);
  int.unshift(name);
  return int;
}
function removeLastKitten(){
  var int = [].concat(kittens);
  int.pop();
  return int;
}
function removeFirstKitten(){
  var int = [].concat(kittens);
  int.shift();
  return int;
}