const app = "I don't do much."

function Arrays() {
  var kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
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

function appendKitten(name) {
  var moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name) {
  var lessKittens = [name, ...kittens];
  return lessKittens;
}

function removeLastKitten() {
  var takeLastOne = kittens.slice(0, kittens.length - 1);
  return takeLastOne;
}

function removeFirstKitten() {
  var takeFirstOne = kittens.slice(1);
  return takeFirstOne;
}