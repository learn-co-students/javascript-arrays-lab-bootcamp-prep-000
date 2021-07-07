var kittens = [] //define your array here

// Add your functions and code here
kittens = [ 'Milo', 'Otis', 'Garfield'];

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
  kittens = kittens.slice(1);
}

function appendKitten(name)
{
  var returnArray = [...kittens, name];
  return returnArray;
}

function prependKitten(name)
{
  var returnArray = [name, ...kittens];
  return returnArray;
}

function removeLastKitten()
{
  var returnArray = kittens.slice(0, kittens.length-1);
  return returnArray;
}

function removeFirstKitten()
{
  var returnArray = kittens.slice(1,kittens.length);
  return returnArray;
}