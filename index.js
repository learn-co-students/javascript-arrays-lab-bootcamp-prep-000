var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name)
{
  kittens.push(name)
}
function destructivelyPrependKitten(name)
{
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten()
{
  kittens.pop()
}
function destructivelyRemoveFirstKitten()
{
  kittens.shift()
}
function appendKitten(name)
{
  return kittens.concat(name)
}
function prependKitten(name)
{
  return [name].concat(kittens)
}
function removeLastKitten()
{
  var toreturn = kittens.slice(0,kittens.length - 1)
  return toreturn
}
function removeFirstKitten()
{
  var toreturn = kittens.slice(1,kittens.length)
  return toreturn
}