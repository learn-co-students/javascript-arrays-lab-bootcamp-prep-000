const app = "I don't do much."

var kittens= ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name)
{
  return kittens.push(name)
}

function destructivelyPrependKitten(name)
{
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten()
{
  return kittens.pop()
}

function destructivelyRemoveFirstKitten()
{
  return kittens.shift()
}

function appendKitten(name)
{
  var appendArray= [...kittens, name]
  return appendArray
}

function prependKitten(name)
{
  var prependArray= [name, ...kittens]
  return prependArray
}

function removeLastKitten()
{
  var removeLArray= kittens.slice(0, kittens.length -1)
  return removeLArray
}

function removeFirstKitten()
{
  var removeFArray= kittens.slice(1)
  return removeFArray
}
