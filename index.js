// const app = "I don't do much."

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
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name)
{
  kittens.shift();
  return kittens;
}

function appendKitten(name)
{
  return[...kittens,name];
}

function prependKitten(name)
{
  return [name,...kittens];
}

function removeLastKitten()
{
  return kittens.slice(0,-1);
}

function removeFirstKitten()
{
  return kittens.slice(1);
}
