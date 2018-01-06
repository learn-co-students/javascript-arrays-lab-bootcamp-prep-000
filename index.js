const app = "I don't do much.";

function removeFirstKitten(name) {
 return kittens.slice(1);
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length-1); 
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  return [name, ...kittens];
}
