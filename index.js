const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
kittens.push(name)
return kittens
}

function destructivelyPrependKitten(name) {
kittens.unshift(name)
return kittens
}

function destructivelyRemoveFirstKitten(name) {
kittens.shift(name)
return kittens
}

function destructivelyRemoveLastKitten(name) {
kittens.pop(name)
return kittens
}

function appendKitten(name){
var moreKittens = kittens.slice(name);
moreKittens.push(name)
  return moreKittens
}

function prependKitten(name){
var moreKittens = kittens.slice(name);
moreKittens.unshift(name)
  return moreKittens
}

function removeFirstKitten(name) {
var moreKittens = kittens.slice(name);
moreKittens.shift(name)
return moreKittens
}

function removeLastKitten(name) {
var moreKittens = kittens.slice(name);
moreKittens.pop(name)
return moreKittens
}