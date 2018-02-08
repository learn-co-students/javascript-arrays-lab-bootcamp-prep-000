const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
  kittens.push("Ralph");
  return kittens;
}


function destructivelyPrependKitten() {
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


function appendKitten() {
  var addKitten = [...kittens, "Broom"];
  return addKitten;
}

function prependKitten() {
  var addKitten = ["Arnold", ...kittens];
  return addKitten;
}

function removeLastKitten() {
  var removeKitten = kittens.slice(0, kittens.length -1);
  console.log("Post slice: " + kittens)
  return removeKitten;
}

function removeFirstKitten() {
 var removeKitten = kittens.slice(-2);
 return removeKitten;
}