var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function  Arrays(){
  function kittens(){
    var kittens = ["Milo", "Otis", "Garfield"]
  }
  window.kittens
} 

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
  return window.kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return window.kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return window.kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return window.kittens
}

function appendKitten(name){
  return [...kittens, "Broom"]
}

function prependKitten(name){
  return ["Arnold", ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, 2)
}

function removeFirstKitten(){
  return kittens.slice(1, 3)
}







 