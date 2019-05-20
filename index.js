var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
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

function destructivelyRemoveFirstKitten()
{
  kittens.shift();
  return kittens;
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
  return kittens;
}

function appendKitten(name)
{
  var newKittenGroup;
  newKittenGroup = [...kittens, name];
  return newKittenGroup;
}

function prependKitten(name)
{
  var newKittenGroup;
  newKittenGroup = [name, ...kittens];
  return newKittenGroup;
}

function removeLastKitten()
{
  var newKittenGroup;
  newKittenGroup = kittens.slice(0, -1);
  return newKittenGroup;
}

function removeFirstKitten()
{
  var newKittenGroup;
  newKittenGroup = kittens.slice(1);
  return newKittenGroup;
}
