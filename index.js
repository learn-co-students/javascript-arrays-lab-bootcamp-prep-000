function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function destructivelyPrependKitten(name){
  kittens.splice(0,0,name);
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
}
function removeFirstKitten() {
  return kittens.slice(1);
}
function appendKitten(name) {
  return kittens.concat(name);
}
function prependKitten(name) {
  return [name, ...kittens];
}
