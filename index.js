var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten (name){
  kittens.unshift(name);
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
function appendKitten(name){
  return [...kittens, name];
}
function prependKitten(name){
  var NewKittens = [name, ...kittens];
  return NewKittens;
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length -1);
}
function removeFirstKitten(){
  var NewKittens = kittens.slice(1);
  return NewKittens;
}