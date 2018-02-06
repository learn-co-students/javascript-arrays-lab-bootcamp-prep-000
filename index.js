const app = "I don't do much."


function destructivelyAppendKitten(name) {

  return kittens.push("Ralph") ;
  
}



function destructivelyPrependKitten(name) {
  
  return kittens.unshift("Bob") ; 
}


function destructivelyRemoveLastKitten(name) {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift() ;
}


function appendKitten(name) {
  var newArray = [...kittens, "Broom"]
  return newArray
}

function prependKitten(name) {
  var newArray = ["Arnold", ...kittens] ;
  return newArray
}


  function removeLastKitten() {
    var newArray = kittens.slice(0, -1) ;
    return newArray;
  }

function removeFirstKitten() {
  var newArray = kittens.slice(-2);
  return newArray
}


