var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten () {
  kittens.push("Ralph");
} 

function destructivelyPrependKitten () {
  kittens.unshift("Bob");
} 

function destructivelyRemoveLastKitten () {
  kittens.shift();
} 

function appendKitten () {
  kittens["Ted"];
} 