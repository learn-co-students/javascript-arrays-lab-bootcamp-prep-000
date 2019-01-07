var kittens = [] //define your array here

// Add your functions and code here

 var kittens = ['Milo', 'Otis', 'Garfield']

function kittens()
{
  var kittens = ["Milo", "Otis", "Garfield"]
}

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

function appendKitten(name)
{
  var kitten = kittens.concat(name);
  
  return kitten;
}

function prependKitten(name)
{
  let kitten = [name, ...kittens];
  
  console.log(kitten);
  
  return kitten;
}

function removeLastKitten()
{
  var kitten =  kittens.slice(0, -1);
  
  console.log(kitten);
  
  return kitten;
}

function removeFirstKitten()
{
  var kitten =  kittens.slice(1);
  
  console.log(kitten);
  
  return kitten;
}