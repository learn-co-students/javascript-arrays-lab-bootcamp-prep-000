const app = "I don't do much."

function Arrays(){
  kittens = ['Milo', 'Otis', 'Garfield'];
}


function destructivelyAppendKitten(name) {
  return kittens.push(name);
  Arrays()
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
  Arrays()
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
  Arrays()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
  Arrays()
}

function appendKitten(name) {
  return [...kittens, name]
  Arrays()
}

function prependKitten(name) {
  return [name, ...kittens]
  Arrays()
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1 )
  Arrays()
}

function removeFirstKitten() {
  return kittens.slice(1)
  Arrays()
}
