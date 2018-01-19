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

kittens.pop();

return kittens
  
}

function destructivelyRemoveFirstKitten(){
  
kittens.shift()  
  
}


function appendKitten(name){
  
var yip = [...kittens,name]

return yip
  
}

function prependKitten(name){
  
  
var yap = [name,...kittens]

return yap
}

function removeLastKitten(){

var cool = kittens.slice(0,2)  

return cool
  
}

function removeFirstKitten(){
  
  
var done = kittens.slice(1,4) 

return done
}