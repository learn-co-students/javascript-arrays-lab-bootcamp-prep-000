const app = "I don't do much."

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
  const kittens1 = [...kittens, name];
  return kittens1;
}

function prependKitten(name) {
  const kittens1 = [name, ...kittens];
  return kittens1;
}

function removeLastKitten() {
  const kittens1 = kittens.slice(0, -1);
  return kittens1;
}

function removeFirstKitten() {
  const kittens1 = kittens.slice(1);
  return kittens1;
}