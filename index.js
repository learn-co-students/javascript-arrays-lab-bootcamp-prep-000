const app = "I don't do much."

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
  var MoreKittens
  return MoreKittens = [...kittens,name]
}

function prependKitten(name)
{
  var MoreKittens
  return MoreKittens = [name,...kittens]
}

function removeLastKitten()
{
  var LessKittens
  return LessKittens = kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten()
{
  var LessKittens
  return LessKittens = kittens.slice(1)
}
