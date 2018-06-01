const app = "I don't do much."
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(name) {
  var kittenz = [...kittens, name];
  return kittenz;
}
function prependKitten(name) {
  var kittenz = [name, ...kittens];
  return kittenz;
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten() {
  return kittens.slice(1);
}