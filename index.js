const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name)
{
  kittens.push(name);
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name)
{
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name)
{
  kittens.shift(name);
}

function appendKitten(name)
{
  var tempArray = [];
  tempArray = [...kittens, name];
  return tempArray;
}

function prependKitten(name)
{
  var tempArray = [];
  tempArray = [name, ...kittens];
  return tempArray;
}

function removeFirstKitten()
{
  var tempArray = [];
  tempArray = kittens.slice(1);
  return tempArray;
}

function removeLastKitten()
{
  var tempArray = [];
  tempArray = kittens.slice(0, kittens.length-1);
  return tempArray;
}
