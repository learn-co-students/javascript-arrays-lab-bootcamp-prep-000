const app = "I don't do much."

function destructivelyAppendKitten(name)
{
 kittens.push(name)
 kittens;
 return kittens;
}

function destructivelyPrependKitten(name)
{
 kittens.unshift(name);
 kittens;
 return kittens;
}

function destructivelyRemoveLastKitten(name)
{
 kittens.pop(name);
 kittens;
 return kittens;
}

function destructivelyRemoveFirstKitten(name)
{
 kittens.shift(name);
 kittens;
 return kittens;
}

function appendKitten(name)
{
  const moreKittens = [...kittens, name];
  moreKittens;
  return moreKittens;
}

function prependKitten(name)
{
  const morekittens = [name, ...kittens];
  morekittens;
  return morekittens;
}

function removeFirstKitten()
{
  const morekittens = kittens.slice(1);
  morekittens;
  return morekittens;
}

function removeLastKitten()
{
  const morekittens = kittens.slice(0, kittens.length - 1);
  morekittens;
  return morekittens;
}
