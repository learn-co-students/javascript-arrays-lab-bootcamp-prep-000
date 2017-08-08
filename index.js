const app = "I don't do much."
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  var result = kittens.shift();
  return kittens;
}
function appendKitten(name) {
  var result = kittens.slice();
  result.push(name);
  return result;
}
function prependKitten(name) {
  var result = kittens.slice();
  result.unshift(name);
  return result;
}
function removeLastKitten() {
  var result = kittens.slice();
  result.pop();
  return result;
}
function removeFirstKitten() {
  return kittens.slice().slice(1);
}
