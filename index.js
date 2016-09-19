var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph)
{
  kittens.push(Ralph);
  return kittens;
}

function destructivelyPrependKitten(Ralph)
{
  kittens.unshift(Ralph);
  return kittens;
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift();
  return kittens;
}

function appendKitten(Ralph)
{
  return [...kittens, Ralph];
}

function prependKitten(Ralph)
{
  return [Ralph, ...kittens];
}

function removeLastKitten()
{
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten()
{
  return kittens.slice(1);
}
