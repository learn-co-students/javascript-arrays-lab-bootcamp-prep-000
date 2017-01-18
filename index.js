const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'] ;

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
}

function appendKitten(name) {
  var new_kitten = [name] ;
  var new_kittens = kittens.concat(new_kitten)
  return new_kittens;
}

function prependKitten(name) {
  var new_kitten = [name] ;
  var new_kittens = new_kitten.concat(kittens)
  return new_kittens;
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1, kittens.length)
}
