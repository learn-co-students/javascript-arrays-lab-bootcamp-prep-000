const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

//appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name){
  kittens.push('Ralph')
}

//prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
}

//removes the last kitten from the kittens array
function destructivelyRemoveLastKitten(){
  kittens.pop()
}

//removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

////appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name){
  return [...kittens,'Broom']
}

//appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name){
  return ['Arnold',...kittens]
}

//removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}

//remove the first in the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten(){
  return kittens.slice(1)
}
