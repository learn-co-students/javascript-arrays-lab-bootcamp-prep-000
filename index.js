const kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten (newKitten) {
  kittens.push(newKitten);
  return kittens;
}

function destructivelyPrependKitten (newKitten) {
  kittens.unshift(newKitten);
  return kittens;
}

function destructivelyRemoveLastKitten () {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();
  return kittens;
}

function appendKitten (name) {
  var newKittens = kittens.concat(name);
  return newKittens;
}

function prependKitten (name) {
  var newKitten = [name];
  var moreKittens = newKitten.concat(kittens);
  return moreKittens;
}

function removeLastKitten () {
  var lessLastKitten = kittens.slice(0,kittens.length-1);
  return lessLastKitten;
}

function removeFirstKitten () {
  var lessFirstKitten = kittens.slice(1,kittens.length);
  return lessFirstKitten;
}