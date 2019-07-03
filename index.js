var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
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
  var array2 = [name] 
  var kitten = kittens.concat(array2)
  return kitten
}

function prependKitten(name)
{
  var kitten = [name,...kittens]
  return kitten
}

function removeLastKitten()
{
  var kitten = kittens.slice(0, kittens.length - 1)
  return kitten
}

function removeFirstKitten()
{
  var kitten = kittens.slice(1)
  return kitten
}
