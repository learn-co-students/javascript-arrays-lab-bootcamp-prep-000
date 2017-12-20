const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function kittens() {
return kittens()
}

function destructivelyAppendKitten(name) {
kittens.push('Ralph');
return destructivelyAppendKitten
}


function destructivelyPrependKitten(name) {
kittens.unshift("Bob")
return destructivelyPrependKitten
}


function appendKitten(name){
   var newKittens = [...kittens]
   newKittens.push(name)
   return newKittens
 }
 
 function prependKitten(name){
  var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens
 }

function destructivelyRemoveLastKitten(){
 kittens.pop()
 return kittens
}

function destructivelyRemoveFirstKitten(){
 kittens.shift()
 return kittens
}

function removeLastKitten(){
   var newKittens = [...kittens]
   newKittens.pop()
   return newKittens
 }


function removeFirstKitten(){
   var newKittens = [...kittens]
   newKittens.shift()
   return newKittens
 }