const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  let new_ar = kittens
  new_ar.pop()
  return new_ar
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  let new_ar = [...kittens]
  new_ar.push(name)
  return new_ar
}

function prependKitten(name){
  let new_ar = [...kittens]
  new_ar.unshift(name)
  return new_ar
}

function removeLastKitten(){
  let new_ar = [...kittens]
  new_ar.pop()
  return new_ar
}

function removeFirstKitten(){
  let new_ar = [...kittens]
  new_ar.shift()
  return new_ar
}
