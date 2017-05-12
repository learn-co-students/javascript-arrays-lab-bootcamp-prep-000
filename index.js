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
  var new_array = [name, ...kittens]
  return new_array
}

function removeLastKitten()
{
var kittens = ["Milo", "Otis", "Garfield"];
kittens = kittens.slice(0, -1);
return kittens;
}

function removeFirstKitten()
{
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens = kittens.slice(1);
  return kittens;
}
