const app = "I don't do much."

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield']
}

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function appendKitten(name) {
  var kittensNew = [...kittens, name]
  return kittensNew
}

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function prependKitten(name) {
  var kittensNew = [name, ...kittens]
  return kittensNew
}

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function removeLastKitten() {
  var kittensNew = kittens.slice(0, kittens.length-1)
  return kittensNew
}

function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
}

function removeFirstKitten() {
  var kittensNew = kittens.slice(1)
  return kittensNew
}


