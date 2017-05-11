const app = "I don't do much."

function destructivelyAppendKitten(name)
{
  kittens.push(name)
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
}

function destructivelyRemoveLastKitten()
{
  kittens.pop()
}

function appendKitten(name)
{
  var new_array = [...kittens, name]
  return new_array
}

function prependKitten(name)
{
  new_array = [name, ...kittens]
  return new_array
}

function removeLastKitten()
{
  kittens.slice(-1)
  return kittens
}

function removeFirstKitten()
{
  kittens.slice(0)
  return kittens
}
