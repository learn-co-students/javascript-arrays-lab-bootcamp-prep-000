var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code her
function appendKitten(name) {
  var arr = kittens.concat(name);
  return arr;
}
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens;
}
function prependKitten(name) {
  return [name, ...kittens];
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function removeLastKitten(){
  var arr = kittens.slice(0, kittens.length - 1);
  return arr;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function removeFirstKitten(){
  var arr = kittens.slice(1);
  return arr;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
