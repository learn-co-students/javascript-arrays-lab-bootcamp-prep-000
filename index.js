var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens;
}
function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
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
function appendKitten(kitten) {
  const newKitten = kittens.concat(kitten);
  return newKitten;
}
function prependKitten(kitten) {
  const newKitten = [kitten, ...kittens];
  return newKitten;
}
function removeLastKitten() {
  const newKitten = kittens.slice(0, 2);
  return newKitten;
}
function removeFirstKitten() {
  const newKitten = kittens. slice(1);
  return newKitten;
}