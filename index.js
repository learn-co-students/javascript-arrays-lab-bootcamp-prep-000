var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(Ralph)
{
  kittens.push(Ralph);
  return kittens;
}
function destructivelyPrependKitten(Ralph)
{
  kittens.unshift(Ralph);
  return kittens
}
function destructivelyRemoveLastKitten(Garfield)
{
  kittens.pop(Garfield)
  return kittens
}
function destructivelyRemoveFirstKitten(Milo)
{
  kittens.shift(Milo)
  return kittens
}
function appendKitten(name)
{
  return [...kittens, name]
}
function prependKitten(name)
{
  return [name, ...kittens]
  }
  function removeLastKitten(Garfield)
  {
    return kittens.slice(0, kittens.length-1)
  }
  function removeFirstKitten(Milo)
  {
    return kittens.slice(1)
  }