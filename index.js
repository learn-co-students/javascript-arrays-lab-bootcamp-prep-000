const app = "I don't do much."

function destructivelyAppendKitten(name){
  window.kittens.push("Ralph")
  return window.kittens
}

function destructivelyPrependKitten(name){
  window.kittens.unshift("Bob")
  return window.kittens
}

function destructivelyRemoveLastKitten(){
  window.kittens.pop()
  return window.kittens
}

function destructivelyRemoveFirstKitten(){
  window.kittens.shift()
  return window.kittens
}

function appendKitten(name){
  return [...window.kittens, "Broom"]
}

function prependKitten(name){
  return ["Arnold", ...window.kittens]
}

function removeLastKitten(){
  return window.kittens.slice(0, window.kittens.length -1)
}

function removeFirstKitten(){
  return window.kittens.slice(1)
}
