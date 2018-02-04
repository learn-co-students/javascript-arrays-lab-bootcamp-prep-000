const app = "I don't do much.";
function destructivelyAppendKitten(name, array) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name, array) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(array) {
  kittens.pop();
  return kittens;
} 
function destructivelyRemoveFirstKitten(array) {
  kittens.shift();
  return kittens;
}
function appendKitten(name, array) {
  return [...kittens, name];
}
function prependKitten(name, array) {
  return [name, ...kittens];
}
function removeLastKitten(array) {
  return kittens.slice(0, kittens.length-1);
}
function removeFirstKitten(array) {
  return kittens.slice(1);
}