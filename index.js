var kittens = [] //define your array here

// Add your functions and code here
kittens = ['Milo', 'Otis', 'Garfield']

 function destructivelyAppendKitten (name) {
   name === 'Ralph'
   kittens.push(name)
 }
 
function destructivelyPrependKitten(name) {
  name === 'Bob'
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
 kittens.pop() 
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name) {
  name === "Broom"
  var new_kittens = [...kittens, name]
  return new_kittens
}
  function prependKitten(name) {
  name === "Arnold"
  var new_kittens = [name,...kittens]
  return new_kittens
  }
  
  function removeLastKitten() {
   var new_kittens=kittens.slice(0,(length-1))
   return new_kittens
  }
  
  function removeFirstKitten() {
    var new_kittens = kittens.slice(1)
    return new_kittens
  }
  