const app = "I don't do much."

//kittens array
kittens = ['Milo', 'Otis', 'Garfield']

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

destructivelyPrependKitten('Chelsey')

//desctructively remove the last kitten from the array
function desctructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

desctructivelyRemoveLastKitten()

//destructively remove the first kitten from the array
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
//function call to remove the first kitten in the array
destructivelyRemoveFirstKitten()

//append kitten to the back of the array and keep the original array unchanged

function appendKitten(name){
  kittens = [...kittens, `${name}`]
  return kittens
}

//function call to add the kitten to the back of the array
appendKitten('Lily')

//prepend the kitten to the kittens array
function prependKitten(name){
  kittens = [`${name}`, ...kittens]
  return kittens
}

//function call to prepend the kitten to the front of the array
prependKitten('Fluffy')

//function to remove the last kitten in the array while keeping the original array
function removeLastKitten(){
  kittens.splice(-1,1)
  return kittens
}

//function call to remove the last kitten in the array
removeLastKitten()

//function to remove the first kitten from the array
function removeFirstKitten(){
  kittens.splice(0,1)
  return kittens
}
//function call to remove the first kitten from the array
removeFirstKitten()
