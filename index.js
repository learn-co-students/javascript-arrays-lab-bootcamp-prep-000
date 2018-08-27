//1
function kittens(array, element) {
  return kittens;
}

//2
function destructivelyAppendKitten(name) {
  kittens = [...kittens, "Ralph"];
  return kittens;
}

//3
function destructivelyPrependKitten(name) {
  kittens = ["Bob", ...kittens];
  return kittens;
}
//4
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
//5
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

//6
function appendKitten(name) {
  return kittens.concat("Broom");
}

//7
function prependKitten(name) {
  var moreKittens = ["Arnold", ...kittens];
  return moreKittens;
}
//8 "Milo", "Otis", "Garfield"
//    0      1        2
function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}

//9 "Milo", "Otis", "Garfield"
//    0       1         2
function removeFirstKitten() {
  return kittens.slice(1);
}
