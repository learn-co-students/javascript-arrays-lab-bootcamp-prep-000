var kittens = ['Milo','Otis','Garfield'] //define your array here



// Add your functions and code here



function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
 var cats = [...kittens,name];
  return(cats)
}

function prependKitten(name) {
 var cats = [name,...kittens];
  return(cats)
}


function removeLastKitten() { 
  var cats = kittens.slice(0,2) 
  return(cats) 

}

function removeFirstKitten() { 
var cats = kittens.slice(-2) 
return(cats) 
}





