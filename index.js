let kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}


function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
} 


function prependKitten(name) {
 return [name, ...kittens]
}

function appendKitten(name) {
  return [...kittens, name]
}

function removeLastKitten() {
  const _kittens = [...kittens]
  _kittens.pop()
  return _kittens
}

function removeFirstKitten() {
  const _kittens = [...kittens]
  _kittens.shift()
  return _kittens
}

