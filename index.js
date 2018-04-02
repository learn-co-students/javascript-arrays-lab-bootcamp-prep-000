const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

var destructivelyAppendKitten = name => {
  kittens.push(name)
  return kittens
}

var destructivelyPrependKitten = name => {
  kittens.unshift(name)
  return kittens
}

var destructivelyRemoveLastKitten = _ => {
  kittens.pop(kittens.length)
  return kittens
}

var destructivelyRemoveFirstKitten = _ => {
  kittens.shift()
  return kittens
}

var appendKitten = name => {
  var arr2 = [...kittens, name]
  return arr2
}

var prependKitten = name => {
  var arr2 = [name, ...kittens]
  return arr2
}

var removeLastKitten = _ => {
  var arr2 = kittens.slice(0, kittens.length - 1)
  return arr2
}

var removeFirstKitten = _ => {
  var arr2 = kittens.slice(1)
  return arr2
}
