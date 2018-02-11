const app = "I don't do much."

function destructivelyAppendKitten(name){
  window.kittens.push(name);
}

function destructivelyPrependKitten(name) {
  window.kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  window.kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  window.kittens.shift();
}

function appendKitten(name) {
  var kittensappend = [...kittens, name];
  return kittensappend;
}

function prependKitten(name) {
  var kittensprepend = [name, ...kittens];
  return kittensprepend;
}

function removeLastKitten() {
  var kittensremovelast = kittens.slice(0, kittens.length - 1);
  return kittensremovelast;
}

function removeFirstKitten() {
  var kittensremovefirst = kittens.slice(1);
  return kittensremovefirst;
}

