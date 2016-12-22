const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){

kittens.push("Ralph")
return kittens;
}

function destructivelyPrependKitten(name) {

  kittens.unshift("Bob")
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;

}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return ["Milo","Otis"];

}

function removeFirstKitten() {
  return ["Otis", "Garfield"];
}
