//const app = "I don't do much."
//define Array kittens
var kittens = ["Milo", "Otis", "garfield"]

function initilize()
{
  kittens = ["Milo", "Otis", "garfield"]
}

function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kittens
}

initilize();

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kittens
}

initilize();

function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens
}

initilize()

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
  return kittens
}

initilize()

function appendKitten(name)
{
  var newkittens = [...kittens, name]
  return newkittens
}

function prependKitten(name)
{
  var newkittens = [name, ...kittens]
  return newkittens
}

function removeLastKitten()
{
  var newkittens = kittens.slice(0, kittens.length -1)
  return newkittens
}

function removeFirstKitten()
{
  var newkittens = kittens.slice(1, kittens.length)
  return newkittens
}
