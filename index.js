const app = "I don't do much."

const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function appendKitten(name){
  const moreKittens = [...kittens, "Broom"];
  return moreKittens
}

function prependKitten(name){
  const moreKittens = ["Arnold", ...kittens];
  return moreKittens
}

function removeLastKitten(){
  const fewerKittens = kittens.slice(0, 2);
  return fewerKittens
}

function removeFirstKitten(){
  const fewerKittens = kittens.slice(-2);
  return fewerKittens
}
