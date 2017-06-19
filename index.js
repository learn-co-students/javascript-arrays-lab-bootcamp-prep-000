const app = "I don't do much."



function kittens(){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return kittens

}

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten()
{ kittens.shift()
}

function appendKitten(name){
  var newArray = [...kittens, name]
  return newArray
}

function prependKitten(name){
  var newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length-1)
  return newArray
}

function removeFirstKitten(){
  var newArray = kittens.slice(1)
  return newArray
}
