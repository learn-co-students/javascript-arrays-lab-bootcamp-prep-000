const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten ()
{
  kittens.push("Ralph");
}
function destructivelyPrependKitten ()
{
  kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten ()
{
  kittens.pop();
}
function destructivelyRemoveFirstKitten ()
{
  kittens.shift();
}
function appendKitten ()
{
  const moreKittens = [...kittens,"Broom"];
  return moreKittens;
}
function prependKitten ()
{
  const moreKittens = ["Arnold",...kittens];
  return moreKittens;
}
function removeLastKitten ()
{
  var lessKittens = kittens.slice (0, kittens.length - 1 )
  return lessKittens;
}
function removeFirstKitten ()
{
  var lessKittens = kittens.slice (1)
  return lessKittens;
}
