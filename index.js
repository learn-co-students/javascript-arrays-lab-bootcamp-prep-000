const app = "I don't do much."

  var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
/*
function destructivelyAppendKitten(name) {
  var kittens = kittens.push(name);
  return kittens
}
*/
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
  }
  /*
  function destructivelyPrependKitten(name) {
    var kittens = kittens.unshift(name);
    return kittens
    }
*/
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
/*
function destructivelyRemoveLastKitten() {
  var kittens = kittens.pop()
  return kittens
}
*/
function destructivelyRemoveFirstKitten() {
 return kittens.shift()
}
/*
function destructivelyRemoveFirstKitten() {
  var kittens = kittens.shift()
return kittens
}
*/
function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
