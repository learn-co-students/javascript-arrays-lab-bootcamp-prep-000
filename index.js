var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(Ralph){
  Ralph = kittens.push("Ralph");
}

function destructivelyPrependKitten(Bob){
  Bob = kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(Garfield){
  Garfield = kittens.pop("Garfield");
}

function destructivelyRemoveFirstKitten(Milo){
  Milo = kittens.shift("Milo");
}

function appendKitten(Broom){
  Broom = [...kittens, "Broom"]
  return Broom
}

function prependKitten(Arnold){
  Arnold = ["Arnold", ...kittens]
  return Arnold
}

function removeLastKitten(Garfield){
  Garfield = kittens.slice(0,2);
  return Garfield
}

function removeFirstKitten(Milo){
  Milo = kittens.slice(1);
  return Milo
}