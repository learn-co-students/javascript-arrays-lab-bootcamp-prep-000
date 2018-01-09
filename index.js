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
  var last = kittens[kittens.length-1]
  
}
function removeFirstKitten()
{
  
}