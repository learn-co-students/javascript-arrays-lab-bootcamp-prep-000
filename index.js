var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function prependKitten(name) {
  var newKittenArrayPre = [name, ...kittens];
  return newKittenArrayPre;
}

function appendKitten(name) {
  var newKittenArrayPost = [...kittens, name];
  return newKittenArrayPost;
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

function removeFirstKitten() {
  var newKittensFirst = kittens.slice(1);
  return newKittensFirst;
}


