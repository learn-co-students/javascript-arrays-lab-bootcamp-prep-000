const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(){
  return kittens.push("Ralph");
}

function destructivelyPrependKitten(){
  return kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(){
  return [...kittens, "Broom"];
}

function prependKitten(){
  return ["Arnold", ...kittens];
}

function removeLastKitten(){
  //o primeiro número do slice é onde o corte se inicia, e o último número é o elemento que será cortado.
  var sliced = kittens.slice(0, 2);
  return sliced;
}

function removeFirstKitten(){
  var sliced = kittens.slice(1);
  return sliced;
}
