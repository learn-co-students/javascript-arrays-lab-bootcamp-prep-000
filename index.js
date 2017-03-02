const app = "I don't do much."

function destructivelyAppendKitten(name) {
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
  var result = Array.from(window.kittens);
  result.push(name);
  return result;
}

function prependKitten(name) {
  var result = Array.from(window.kittens);
  result.unshift(name);
  return result;
}

function removeLastKitten() {
  var result = Array.from(window.kittens);
  result.pop();
  return result;
}

function removeFirstKitten() {
  var result = Array.from(window.kittens);
  result.shift();
  return result;
}
