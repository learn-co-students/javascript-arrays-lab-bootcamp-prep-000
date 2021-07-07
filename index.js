var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name)
{
  return kittens.push(name);
}

function destructivelyPrependKitten(name)
{
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten()
{
  return kittens.pop();
}

function destructivelyRemoveFirstKitten()
{
  return kittens.shift();
}

function appendKitten(name)
{
  return [...kittens, name];
}

function prependKitten(name)
{
  return [name, ...kittens];
}

function removeLastKitten()
{
  var newArr = kittens.slice(0, kittens.length-1);
  
  return newArr;
}

function removeFirstKitten()
{
  var newArr = kittens.slice(1, kittens.length);
  
  return newArr;
}



