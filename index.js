var kittens = [] //define your array here

// Add your functions and code here
// Destructively...
// Append
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

// Prepend
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

// Remove Last
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

// Remove First
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

// Nicely now
// Append
function appendKitten(name) {
  return [...kittens, name];
}
// Prepend
function prependKitten(name) {
  return [name, ...kittens];
}
// Remove Last
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
// Remove First
function removeFirstKitten() {
  return kittens.slice(1);
}