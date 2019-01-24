var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name)
{
  kittens.push(name);
  return(kittens);
}
function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
  return(kittens);
}

function destructivelyRemoveLastKitten()
{
  kittens.pop();
  return(kittens);
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift();
  return(kittens);
}

function appendKitten(name)
{
  var safeKitten = [...kittens, name];
  return(safeKitten);
}

function prependKitten(name)
{
  var safeKitten = [name,...kittens];
  return(safeKitten);
}

function removeLastKitten()
{
  var safeKitten = kittens.slice(0, kittens.length -1);
  return(safeKitten);
}

function removeFirstKitten()
{
  var safeKitten = kittens.slice(1);
  return(safeKitten);
}