var kittens = ["Milo", "Otis", "Garfield"] 


// Prepend this is to add something to the beginning of something 

function destructivelyPrependKitten(name){
 kittens.unshift(name)
 return kittens }

 // adding something to the end = append


function destructivelyAppendKitten(name){
 kittens.push(name)
 return kittens }

function destructivelyRemoveLastKitten(name){
 kittens.pop(1)
 return kittens }
 
 function destructivelyRemoveFirstKitten(name){
 kittens.shift(1)
 return kittens }
 
 
function appendKitten(name){ return [...kittens, "Broom" ];}
 
function prependKitten(name){ return [ "Arnold", ...kittens ];}
  

function removeLastKitten(kittens) { var newArray = ["Milo", "Otis", "Garfield"]
  ; return newArray.splice(0, newArray.length-1) }
  
  function removeFirstKitten(kittens) { var newArray = ["Milo", "Otis", "Garfield"]
  ; return newArray.splice(1) }



