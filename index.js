const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(element){
  kittens.push(element)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}

function appendKitten(name){
  const kittens = ['Milo','Otis','Garfield']
  const cats  = [...kittens,name]
  return cats
}

function prependKitten(name){
  const kittens=['Milo','Otis','Garfield']
  const cats=[name,...kittens]
  return cats
}

function removeFirstKitten(){
  const cats = kittens.slice(1)
  return cats
}

function removeLastKitten(){
  const cats = kittens.slice(0, kittens.length-1)
  return cats
}
