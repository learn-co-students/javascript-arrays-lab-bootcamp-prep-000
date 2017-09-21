var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  console.log(kittens)
 }
function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  console.log(kittens)
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  console.log(kittens)
 }
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  console.log(kittens)
}
function appendKitten(kitten) {
  const moreKittens = [...kittens,kitten];
  return moreKittens
}
function prependKitten(kitten) {
  const frontKittens = [kitten,...kittens];
  return frontKittens
}
function removeLastKitten(kitten) {
  const removeLast = kittens.slice(0,kittens.length-1);
  return removeLast
}
function removeFirstKitten(kitten) {
  const removeFirst = kittens.slice(-2);
  return removeFirst
}
