var kittens = [
  "Milo",
  "Otis",
  "Garfield"
];

function destructivelyAppendKitten(name) {
  kittens.push(`${name}`);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(`${name}`);
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
  var newArray = kittens.concat(`${name}`);
  return newArray;
}
function prependKitten(name) {
  var nameArray = [`${name}`];
  var newArray = nameArray.concat(kittens);
  return newArray;
}

function removeLastKitten() {
  var removeGarfield = kittens.slice(0, kittens.length - 1);
  return removeGarfield;
}

function removeFirstKitten() {
  var removeMilo = kittens.slice(1);
  return removeMilo;
}
