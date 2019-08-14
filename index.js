var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten()
{
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten()
{
  kittens.unshift("Bob");
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

function appendKitten()
{
 
 var kittens2 = kittens.concat("Broom");
 return kittens2;
}

function prependKitten()
{
 var kittens1 = ["Arnold"];
 var kittens3 = kittens1.concat(kittens);
 return kittens3;
}

