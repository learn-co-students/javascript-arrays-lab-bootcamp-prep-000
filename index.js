var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name); 
  return name; 
}
function appendKitten(name) {
 return [...kittens, name];
}
function prependKitten(name) {
  return [name,...kittens];
}
function removeLastKitten(name) {
  return kittens.slice(0,length - 1);
}
function removeFirstKitten(name) {
  return kittens.slice(1);
}