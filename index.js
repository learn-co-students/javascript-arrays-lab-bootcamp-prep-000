const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
  kittens= [...kittens, "Ralph"]
  return kittens;
}

function destructivelyPrependKitten(){
  kittens = ["Bob", ...kittens]
  return kittens;
}

function appendKitten(){

}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function prependKitten(){
  const moreKittens = ["Arnold",...kittens];
  return moreKittens;
}
function appendKitten(){
  const moreKittens = [...kittens,"Broom"];
  return moreKittens;
}

function removeLastKitten(){
  const moreKittens = kittens.slice(0, kittens.length - 1);
  return moreKittens;
}

function removeFirstKitten(){
  const moreKittens = kittens.slice(1, kittens.length);
  return moreKittens;
}
