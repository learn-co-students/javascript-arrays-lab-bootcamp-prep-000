
var kittens = ["Milo", "Otis", "Garlfield"];

function kittens()
{
  return kittens;
}

function destructivelyAppendKitten(name)
{
  var newKitten = kittens.push("Ralph");
}

function destructivelyPrependKitten(name)
{
  var nextNewKitten = kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten()
{
  var destroyLastKitten = kittens.pop();
}

function destructivelyRemoveFirstKitten()
{
  var destroyFirstKitten = kittens.shift();
}

function appendKitten(name)
{
 return [...kittens, "Broom"];
}

function prependKitten(name)
{
  return ["Arnold", ...kittens];
}

function removeLastKitten()
{
  var niceLastKitten = kittens.slice(0, kittens.length -1);
  return niceLastKitten;
}

function removeFirstKitten()
{
  var niceFirstKitten = kittens.slice(1)
  return niceFirstKitten;
}
