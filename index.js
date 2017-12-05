const app = "I don't do much."

function destructivelyAppendKitten(kitten1) {
  kittens.push(kitten1);
  return kittens;
}

function destructivelyPrependKitten(kitten2) {
  kittens.unshift(kitten2);
  return kittens;
}
function destructivelyRemoveLastKitten(kitten3) {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(kitten4) {
  kittens.shift();
  return kittens;
}
function appendKitten(kitten5) {
  var newArray1 = [...kittens, kitten5]
  return newArray1;
}
function prependKitten(kitten6) {
  var newArray2 = [kitten6, ...kittens];
  return newArray2;
}
function removeLastKitten() {
  var newArray3 = kittens.slice(0, kittens.length-1);
  return newArray3;
}
function removeFirstKitten() {
  var newArray4 = kittens.slice(1);
  return newArray4;
}