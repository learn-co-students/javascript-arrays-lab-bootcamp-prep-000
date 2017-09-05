const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {

    return kittens.push(name);
}

function destructivelyPrependKitten(name) {

  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {

  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newArr = [...kittens, name];

  return newArr;
}

function prependKitten(name) {
  var newArr = [name, ...kittens];

  return newArr;
}

function removeLastKitten() {
  var newArr = kittens.slice(0, kittens.length - 1);

  return newArr;
}

function removeFirstKitten() {
  var newArr = kittens.slice(1);

  return newArr;
}
