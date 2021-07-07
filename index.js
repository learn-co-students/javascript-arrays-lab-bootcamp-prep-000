var kittens = [] //define your array here

// Add your functions and code here

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
  var temp = [];
  temp = [...kittens,name];
  return temp;
}


function prependKitten(name)
{
  var temp = [];
  temp = [name, ...kittens];
  return temp;
}

function removeLastKitten ()
{
  var temp = [];
  temp = kittens.slice(0,kittens.length-1);
  return temp;
}

function removeFirstKitten()
{
  var temp = [];
  temp = kittens.slice(1);
  return temp;
}