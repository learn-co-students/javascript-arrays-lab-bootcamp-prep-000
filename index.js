const app = "I don't do much."
kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
  return kittens
}

function appendKitten(name)
{
  var Array = [...kittens, name]
  return Array
}

function prependKitten(name)
{
  var Array = [name, ...kittens]
  return Array
}

function removeLastKitten()
{
  var Array = kittens.slice()
  Array.pop()
  return Array
}

function removeFirstKitten()
{
  var Array = kittens.slice()
  Array.shift()
  return Array
}
