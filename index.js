var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitty) {
  kittens.push(kitty);
  return kittens;
}
 function destructivelyPrependKitten(kitty) {
  kittens.unshift(kitty);
  return kittens;
}
 function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
 function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
 function appendKitten(kitty){
  return [...kittens, kitty];
}
 function prependKitten(kitty) {
  return [kitty, ...kittens];
}
 function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
 function removeFirstKitten() {
  return kittens.slice(1);
}
