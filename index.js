var kittens = [
        "Milo",
        "Otis",
        "Garfield"
      ] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return name 
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return name
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  return kittens.concat("Broom")
}

function prependKitten(name){
  return ["Arnold",...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}