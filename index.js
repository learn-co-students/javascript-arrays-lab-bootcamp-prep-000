const app = "I don't do much."

function destructivelyAppendKitten (array, element) {
  window.kittens.push('Ralph');
  return window.kittens;
};

function destructivelyPrependKitten (array, element) {
  window.kittens.unshift('Bob');
  return window.kittens;
};

function destructivelyRemoveLastKitten (array) {
  window.kittens.pop();
  return window.kittens;
};

function destructivelyRemoveFirstKitten (array) {
  window.kittens.shift();
  return window.kittens;
};

function appendKitten (array, element) {
  var appendKitten = [...window.kittens, 'Broom'];
  return appendKitten;
};

function prependKitten (array, element) {
  var prependKitten = ['Arnold', ...window.kittens];
  return prependKitten;
};

function removeLastKitten (array) {
  var removeLastKitten = window.kittens.slice(0, window.kittens.length - 1);
  return removeLastKitten;
};

function removeFirstKitten (array) {
  var removeFirstKitten = window.kittens.slice(1);
  return removeFirstKitten;
};
