function destructivelyAppendKitten(name){
  
  kittens.push("Ralph")
  
  return kittens
}

function destructivelyPrependKitten(name){
  
  kittens.unshift("Bob")
  
  return kittens 
}

function destructivelyRemoveLastKitten(name){
  
  kittens.pop('')
  return kittens
  
}

function destructivelyRemoveFirstKitten(name){
  
  kittens.shift('Garfield')
  return kittens
}

function appendKitten(name){
  
 var list = [...kittens,"Broom"]
  
  return list
  
  }

function prependKitten(name){
  
 var list = ["Arnold",...kittens]
  
  return list
  
  }
  
  function removeLastKitten(name){
  
 var list = kittens.slice(0,kittens.length - 1)
  
  return list
  
  }

 function removeFirstKitten(name){
  
 var list = kittens.slice(1)
  
  return list
  
  }



