const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name)
{
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name)
{
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name)
{
  kittens.shift(name);
  return kittens;
}

function appendKitten(name)
{
  var new_kittens = [...kittens, name];
  return new_kittens;
}

function prependKitten(name)
{
  var new_kittens = [name, ...kittens];
  return new_kittens;
}

function removeLastKitten(name)
{
  var new_kittens = kittens.slice(0, kittens.length-1);
  return new_kittens;
}

function removeFirstKitten(name)
{
  var new_kittens = kittens.slice(1, kittens.length);
  return new_kittens;
}
