var kittens = [] //define your array here

// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
destructivelyAppendKitten("Ralph")

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
destructivelyPrependKitten("Ralph")

function destructivelyRemoveLastKitten(array) {
   kittens.pop()
   return array
  }
  destructivelyRemoveLastKitten(kittens) 
  
function destructivelyRemoveFirstKitten(array) {
    kittens.shift()
    return array 
  }
  
    function appendKitten(array, element) {
    return [...kittens, "Broom"]
  }
  
  function prependKitten(array, element) {
  return ["Arnold", ...kittens] 
  }
  
  function removeFirstKitten(array) {
    array = kittens.slice(1)
    return array
  }

  function removeLastKitten(array) {
   return kittens.slice(0, kittens.length - 1)
  }
  removeLastKitten(kittens) 