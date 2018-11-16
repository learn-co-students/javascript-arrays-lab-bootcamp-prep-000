var kittens = ["Milo", "Otis", "Garfield"] //define your array here


// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift();
}

const appendKitten = (name) => {
  var final = [...kittens, name];
  return final;
}

const prependKitten = (name) => {
  var final = [name, ...kittens];
  return final;
}

function removeLastKitten() {
  var final = kittens.slice(0, kittens.length - 1);
  return final;
}

const removeFirstKitten = () => {
  var final = kittens.slice(1);
  return final;
}
