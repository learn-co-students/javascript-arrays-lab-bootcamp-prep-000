var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code he
function destructivelyAppendKitten ()
{
  kittens.push("Ralph")
}  

function destructivelyPrependKitten ()
{
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten()
{
  kittens.pop("Garfield")
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift("Milo")
}
function appendKitten()
{
  var newKittens=[...kittens,"Broom"]
  return newKittens
}