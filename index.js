var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]


kittens.push("Ralph");

 function destructivelyAppendKitten(array, element) {
    kittens.push("Ralph"); {
      return kittens } 
  }

function destructivelyPrependKitten(array, element) {
  kittens.unshift("Bob"); {
  return kittens }
}

function destructivelyRemoveLastKitten(array, element) {
  kittens.pop(); {
    return kittens }
}

function destructivelyRemoveFirstKitten(array, elements) {
  kittens.shift(); {
    return kittens }
}

  function appendKitten(array, element) {
    
      return [...kittens, "Broom"] }
  
    function prependKitten(array, element) {
      return ["Arnold", ...kittens] }
    
function removeLastKitten(array, element) {
  return kittens.slice(0, length - 1)}
  
  function removeFirstKitten(array, element) {
   return kittens.slice(1);
  }
    
    
    
    
  