const app = "I don't do much."

function destructivelyAppendKitten(name)
{
  kittens.push(name);
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift();
}

function appendKitten(name)
{
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name)
{
  return [name, ...kittens];
}

function removeLastKitten()
{
  return kittens.slice(0, 2);
}

function removeFirstKitten()
{
  return kittens.slice(1, kittens.length);
}
