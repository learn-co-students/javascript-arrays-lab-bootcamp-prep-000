const app = "I don't do much."

//kittens array
var kittens = ['Milo', 'Otis', 'Garfield']

//add a kitten to the end of the array destructively
function destructivelyAppendKitten(name){
  kittens.push(`${name}`)
  return kittens
}

destructivelyAppendKitten('Justin')

//prepend a name to the beginning of the kittens array
function destructivelyPrependKitten(name){
  kittens.unshift(`${name}`)
  return kittens
}

destructivelyPrependKitten('Bob')

//desctructively remove the last kitten from the array
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

destructivelyRemoveLastKitten()

//destructively remove the first kitten from the array
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
//function call to remove the first kitten in the array
destructivelyRemoveFirstKitten()

//append kitten to the back of the array and keep the original array unchanged

function appendKitten(name){
  var kitten = [...kittens, `${name}`]
  return kitten
}

//function call to add the kitten to the back of the array
appendKitten('Broom')

//prepend the kitten to the kittens array
function prependKitten(name){
  var kitten = [`${name}`, ...kittens]
  return kitten
}

//function call to prepend the kitten to the front of the array
prependKitten('Arnold')

//function to remove the last kitten in the array while keeping the original array
function removeLastKitten(){
  var kitten = kittens.slice(0,2)
  return kitten
}

//function call to remove the last kitten in the array
removeLastKitten()

//function to remove the first kitten from the array
function removeFirstKitten(){
  var kitten = kittens.slice(1)
  return kitten
}
//function call to remove the first kitten from the array
removeFirstKitten()
