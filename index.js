// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name)
{
  kittens.push(name);
    return kittens;
}
function destructivelyPrependKitten(name)
{
  kittens=[name,"Milo", "Otis", "Garfield"];
  return kittens;
}
function destructivelyRemoveLastKitten()
{
  kittens.pop();
}
function destructivelyRemoveFirstKitten()
{
  kittens.shift();
}
function appendKitten (name)
{
  return ["Milo", "Otis", "Garfield",name];
}
function prependKitten (name)
{
  return [name,"Milo", "Otis", "Garfield"];
}
function removeLastKitten ()
{
  return ["Milo", "Otis"];
}
function removeFirstKitten ()
{
  return [ "Otis", "Garfield"];
}
