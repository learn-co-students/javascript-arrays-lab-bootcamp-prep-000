const app = "I don't do much."

  var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  var newKittens = kittens.push(name);
  return newKittens
}
/*
function destructivelyAppendKitten(name) {
  var kittens = kittens.push(name);
  return kittens
}
*/
function destructivelyPrependKitten(name) {
  var newKittens2 = kittens.unshift(name);
  return newKittens2
  }
  /*
  function destructivelyPrependKitten(name) {
    var kittens = kittens.unshift(name);
    return kittens
    }
*/
function destructivelyRemoveLastKitten() {
  var newKittens3 = kittens
  newKittens3.pop()
  return newKittens3
}
/*
function destructivelyRemoveLastKitten() {
  var kittens = kittens.pop()
  return kittens
}
*/
function destructivelyRemoveFirstKitten() {
  var newKittens4 = kittens
newKittens4.shift()
return newKittens4
}
/*
function destructivelyRemoveFirstKitten() {
  var kittens = kittens.shift()
return kittens
}
*/
function appendKitten(name) {
  var newKittens5 = kittens
  newKittens5 = [...newKittens5, name]
  return newKittens5
}

function prependKitten(name) {
  var newKittens6 = kittens
  newKittens6 = [name, ...newKittens6]
  return newKittens6
}

function removeLastKitten() {
  return kittens.slice(0, -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
