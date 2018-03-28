const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten(Bob) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(Broom) {
  var moreKittens = [...kittens, "Broom"]
  return moreKittens;
}

function prependKitten(Arnold) {
  var moreKittens = ["Arnold", ...kittens]
  return moreKittens;
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten() {
  var lesskittens = kittens.slice(1)
  return lesskittens;
}
