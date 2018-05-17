const app = "I don't do much."

function destructivelyAppendKitten(name) {
  window.kittens.push(name);
  return window.kittens;
}

function destructivelyPrependKitten(name) {
  window.kittens.unshift(name);
  return window.kittens;
}

function destructivelyRemoveLastKitten() {
  window.kittens.pop();
  return window.kittens;
}

function destructivelyRemoveFirstKitten() {
  window.kittens.shift();
  return window.kittens;
}

function appendKitten(name) {
  return [...window.kittens, name];
}

function prependKitten(name) {
  return [name, ...window.kittens];
}

function removeLastKitten() {
  const new_array = window.kittens.slice(0, window.kittens.length - 1);
  return new_array;
}

function removeFirstKitten() {
  const new_array = window.kittens.slice(1);
  return new_array;
}