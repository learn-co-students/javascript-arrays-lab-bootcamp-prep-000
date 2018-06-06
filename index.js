var kittens = ["Milo", "Otis", "Garfield"]

// appends a kitten to the end of the kittens array:
function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kittens
}

// prepends a kitten to the beginningof the kittens array:
function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kittens
}

// removes the last kitten from the kittens array:
function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens
}

// removes the First kitten from the kittens array:
function destructivelyRemoveFirstKitten()
{
  kittens.shift()
  return kittens
}

// appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function appendKitten(name)
{
  var retArray = [...kittens, name]
  return retArray
}

// prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function prependKitten(name)
{
  var retArray = [name, ...kittens]
  return retArray
}

// removes the last kitten in the kittens array andreturns a new array, leaving the kittens array unchanged:
function removeLastKitten()
{
  var retArray = kittens.slice(0, length - 1)
  return retArray
}

// removes the first kitten from the kittens arrayand returns a new array, leaving the kittens array unchanged:
function removeFirstKitten()
{
  var retArray = kittens.slice(1)
  return retArray
}