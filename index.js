function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  return kittens.splice(-1, 1);
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
function appendKitten(name) {
  const array = [...kittens];
  array.push(name);
  return array;
}
function prependKitten(name) {
  const array = [...kittens];
  array.unshift(name);
  return array;
}
function removeLastKitten() {
  const array = [...kittens];
  array.splice(-1, 1);
  return array;
}
function removeFirstKitten() {
  const array = [...kittens];
  array.shift();
  return array;
}