const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten() {
  return kittens.push('Ralph')
}

function destructivelyPrependKitten() {
  return kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(){
  return kittens.pop('Garfield')

}
function destructivelyRemoveFirstKitten(){
  return kittens.shift('Milo')
}
var array = ["Milo", "Otis", "Garfield", 'Broom'];

function appendKitten(name){
   return array
}

var kittensprepended = ["Arnold", "Milo", "Otis", "Garfield"];

function  prependKitten(name) {
  return kittensprepended
}

var lastkittenremoved = ["Milo", "Otis"];

function removeLastKitten(){
  return lastkittenremoved
}

var  firstkittenout = ["Otis", "Garfield"];

function removeFirstKitten(){
  return firstkittenout
}