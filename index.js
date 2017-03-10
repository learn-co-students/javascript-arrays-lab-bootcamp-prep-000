// const app = "I don't do much."
//
// var kittens = () =>
// {
//   kittens = ['Milo', 'Otis', 'Garfield']
//
// }

var destructivelyAppendKitten = name =>
{
  kittens.push(name)
  return kittens
}

var destructivelyPrependKitten = name =>
{
  kittens.unshift(name)
  return kittens
}

var destructivelyRemoveLastKitten = () =>
{
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = () =>
{
  kittens.shift()
  return kittens
}

var appendKitten = name =>
{
  var newKittens = [...kittens, name]
  return newKittens
}

var prependKitten = name =>
{
  var newKittens = [name,...kittens]
  return newKittens
}

var removeLastKitten = () =>
{
  var newKittens = kittens.slice(0,kittens.length-1)
  return newKittens
}

var removeFirstKitten = () =>
{
  var newKittens = kittens.slice(1)
  return newKittens
}
