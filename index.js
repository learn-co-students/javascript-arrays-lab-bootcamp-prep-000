const app = "I don't do much."

// Appends a kitten to the end of the kittens array
// Expect:["Milo", "Otis", "Garfield", "Ralph"]
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

// Prepends a kitten to the beginning of the kittens array
// Expect: ["Bob", "Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

// Removes the last kitten from the kittens array
// Expect: ["Milo", "Otis"]
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

// Removes the First kitten from the kittens array
// Expect: ["Otis", "Garfield"]
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

// Appends a kitten to the kittens array and returns a new array,
// leaving the kittens array unchanged
// Expect: ["Milo", "Otis", "Garfield", "Broom"]
function appendKitten(name) {
  return [...kittens, name];
}

// Prepends a kitten to the kittens array and returns a new array,
// leaving the kittens array unchanged
// Expect: ["Arnold", "Milo", "Otis", "Garfield"]
function prependKitten(name) {
  return [name, ...kittens];
}

// Removes the last kitten in the kittens array and returns a new array,
// leaving the kittens array unchanged
// Expect : ["Milo", "Otis"]
function removeLastKitten() {
  return kittens.slice(0, 2);
}

// Removes the first kitten from the kittens array and returns a new array,
// leaving the kittens array unchanged
// Expect: ["Otis", "Garfield"]
function removeFirstKitten() {
  return kittens.slice(1, 3);
}
