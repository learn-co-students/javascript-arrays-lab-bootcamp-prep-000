var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  let kittenName = kittens;
  kittenName.push(name)
  return kittenName;
}
function destructivelyPrependKitten(name) {
  let prepend = kittens;
  prepend.unshift(name);
  return prepend;
}

function destructivelyRemoveLastKitten() {
  let removeKitten = kittens;
  removeKitten.pop();
  return removeKitten;
}
function destructivelyRemoveFirstKitten() {
  let firstKitten = kittens;
  firstKitten.shift();
  return firstKitten;
}

function appendKitten(name) {
  let append = kittens;
  append = [...append, name];
  return append;
}

function prependKitten(name) {
  let prepend = kittens;
  prepend = [name,...prepend];
  return prepend;
}

function removeLastKitten() {
  let remove = kittens;
  remove = remove.slice(0, remove.length -1);
  return remove;
}

function removeFirstKitten() {
  let removeFirst = kittens;
  removeFirst = removeFirst.slice(1);
  return removeFirst;

}
