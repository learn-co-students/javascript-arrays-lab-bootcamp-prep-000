var kittens = ['Milo', 'Otis', 'Garfield'];

function removeFirstKitten()
{
  var firstkitty=kittens.slice(1)
  return firstkitty
}
function removeLastKitten()
{
  var lastkitten=kittens.slice(0,kittens.length-1)
  return lastkitten
}

function appendKitten(name)
{
  return [...kittens, name]
}

function prependKitten(name)
{
  return [name,...kittens]
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
  kittens=kittens.slice(1)
  return kittens
}

function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kittens
}
