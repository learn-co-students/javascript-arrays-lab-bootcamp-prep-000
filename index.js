const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
};

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var moreKittens = new Array();
  moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name) {
  var moreKittens = new Array();
  moreKittens = [name, ...kittens];
  return moreKittens;
}

function removeLastKitten() {
  var lessKittens = new Array();
  lessKittens = kittens.slice(0, kittens.length - 1);
  return lessKittens;
}

function removeFirstKitten() {
  var lessKittens = new Array();
  lessKittens = kittens.slice(1);
  return lessKittens;
}
