var kittens = ["Milo", "Otis", "Garfield"] ;


//define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  
  kittens.push(name) ;
  return kittens ; 
  
}

function destructivelyPrependKitten(name) {
  
  kittens.unshift(name);
  return kittens ; 
}

function destructivelyRemoveLastKitten() {
  
  
 kittens = kittens.slice(0, kittens.length - 1) ;
 return kittens ; 
  
}

function destructivelyRemoveFirstKitten() {
  
  kittens.shift() ;
  return kittens ; 
}

function appendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"] ;
  var kittens = kittens ; 
  kittens = [...kittens , name]
  return kittens ; 
}

function prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"] ;
  var kittens = kittens ; 
  kittens = [name , ...kittens]
  return kittens ; 
}


function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"] ;
  kittens = kittens ; 
  kittens = kittens.slice(0, kittens.length - 1) ;
  return kittens ; 
}


 
function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"] ;
  kittens = kittens ; 
  kittens = kittens.slice(1);
  return kittens ;
  
}









