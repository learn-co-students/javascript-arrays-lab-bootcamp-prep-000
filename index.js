const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph){
kittens.push('Ralph');
return kittens;
}

function destructivelyPrependKitten(Bob){
  kittens.unshift('Bob');
return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
return kittens;
}

function appendKitten(Broom){
  const kittens1 = [...kittens, Broom];
  return kittens1;
}

function prependKitten(Arnold){
  const kittens2 = [Arnold, ...kittens];
  return kittens2;
}

function removeLastKitten(){
  const kittens3 = kittens.slice(0,2)
return kittens3;
}

function removeFirstKitten(){
  const kitten4 = kittens.slice(1,4);
return kitten4;
}
