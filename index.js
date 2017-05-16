const app = "I don't do much."

function destructivelyAppendKitten(newKitten)
{
  kittens.push(newKitten);
  return kittens;
}

function destructivelyPrependKitten(newKitten)
{
  kittens.unshift(newKitten);
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

function appendKitten(newKitten)
{
  return [...kittens, newKitten];
}

function prependKitten(newKitten)
{
  return [newKitten, ...kittens];
}

function removeLastKitten()
{
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten()
{
  return kittens.slice(1);
}
