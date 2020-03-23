var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}


function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  var arr = [name, ...kittens];
  return arr
}

function removeLastKitten() {
  var arr = kittens.slice(0, -1);
  return arr
}

function removeFirstKitten() {
  var arr = kittens.slice(1);
  return arr
}
