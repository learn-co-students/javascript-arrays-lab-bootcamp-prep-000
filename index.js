const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield" ];


function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift(1)
}

function appendKitten(name) {
 const kitten = kittens
 const newArray = [...kitten, name]
  return newArray
}

function prependKitten(name){
  const kitten = kittens
  const newArray = [name, ...kitten]
  return newArray
}

function removeLastKitten(){
  const kitten = kittens
  const newArray = kitten.slice(0,2)
  return newArray
}

function removeFirstKitten(){
  const kitten = kittens
  const newArray = kitten.slice(-2)
  return newArray
}