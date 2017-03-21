const app = "I don't do much."
var kittens=["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
  /* return([...kittens, name]);*/
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
  /* return([...kittens, name]);*/
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
  /* return([...kittens, name]);*/
}

function appendKitten(name) {
  return([...kittens, name]);
}

function prependKitten(name) {
  return([name, ...kittens]);
}

function removeLastKitten() {
  return(kittens.slice(0,2));
}

function removeFirstKitten() {
  return(kittens.slice(1,3));
}
