var kittens = ["Milo","Otis","Garfield"]
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
  return kittens.pop()
}
function destructivelyRemoveFirstKitten()
{
  return kittens.shift()
}
function appendKitten(name)
{
  var changed = [...kittens,name]
  return changed
}
function prependKitten(name)
{
  var changed = [name,...kittens]
  return changed
}
function removeLastKitten()
{
  return kittens.slice(0,kittens.length-1)
  
}
function removeFirstKitten()
{
  return kittens.slice(1,kittens.length)
}