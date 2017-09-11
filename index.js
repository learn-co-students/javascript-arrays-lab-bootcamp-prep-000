const app = "I don't do much."
window.kittens = ['Milo', 'Otis', 'Garfield'];


function appendKitten(cat){
  const addKitten = [... kittens, cat]
  return addKitten
}

function destructivelyAppendKitten(cat){
 const addKitten = kittens.push(cat)
  return addKitten
}

function destructivelyPrependKitten(name){
  const addKitten = kittens.unshift(name)
  return addKitten
}

function destructivelyRemoveLastKitten(cat){
  const removeKitten = kittens.pop(cat)
  return removeKitten
}

function destructivelyRemoveFirstKitten(cat){
  const removeKitten = kittens.shift(cat)
  return removeKitten
}

function prependKitten(name){
   const addKitten = [name,... kittens]
  return addKitten
}

function removeLastKitten(cat){
 const removeKitten = kittens.slice(0, kittens.length -1)
  return removeKitten
}

function removeFirstKitten(cat){
  const removeKitten = kittens.slice(1)
  return removeKitten
}
