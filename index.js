const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitten)
{
  return kittens.push(kitten)
}

function destructivelyPrependKitten(kitten)
{
  return kittens.unshift(kitten)
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

function appendKitten(kitten)
{
  return [...kittens, kitten]
}

function prependKitten(kitten)
{
  return [kitten, ...kittens]
}

function removeLastKitten()
{
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten()
{
  return kittens.slice(1)
}
