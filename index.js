const app = "I don't do much."

var kittens=['Garfield','Bobby','Rockie']

function destructivelyAppendKitten (name) {

kittens.push(name);

 return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens

}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens

}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens

}

function appendKitten(name) {
  var morecats;
  morecats=[...kittens,name]
  return morecats
}

function prependKitten(name) {
  var morecats;
  morecats=[name,...kittens]
  return morecats
}

function removeLastKitten() {
  var morecats;
  morecats=kittens.slice(0,kittens.length -1)
  return morecats
}

function removeFirstKitten() {
  var lesscats;
  lesscats=kittens.slice(1)
  return lesscats
}
