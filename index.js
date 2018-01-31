const app = "I don't do much.";

name = 'Doug'

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}


function appendKitten(name) {
  var newray = [];
  newray =  [...kittens,name];
  return newray
}

function prependKitten(name) {
  var newray = []
  newray = [name,...kittens]
  return newray
}

function removeLastKitten() {
  var newray = []
  return newray = kittens.slice(0,kittens.length-1)
}

function removeFirstKitten() {
  var newray = []
  return newray = kittens.slice(1);
}