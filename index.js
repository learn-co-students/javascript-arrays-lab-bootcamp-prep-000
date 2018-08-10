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
  kittens = [...kittens, name];
  return kittens;
}
// Prepend
function prependKitten(name) {
  kittens = [name, ...kittens];
  return kittens;
}
// Remove Last
// Remove First