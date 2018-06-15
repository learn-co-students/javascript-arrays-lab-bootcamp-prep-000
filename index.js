const app = "I don't do much."
kittens=["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(){
   var destructivelyAppendKitten = kittens.push("Ralph");
   return destructivelyAppendKitten
}
function destructivelyPrependKitten(){
 var  destructivelyPrependKitten = kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten(){
  
  var destructivelyRemoveLastKitten=  
  kittens.pop()
  return ["Milo", "Otis"]
}
function destructivelyRemoveFirstKitten(){
  var destructivelyRemoveFirstKitten = kittens.shift()
  return ["Otis", "Garfield"]
  }
  
  function appendKitten(){
   var appendKitten = kittens.concat("Broom")
   
    return appendKitten
  }
  
  function prependKitten(){
  
   var prependKitten = ["Arnold", ...kittens]
   return prependKitten
    }
    
    function removeFirstKitten(){
      var removeFirstKitten = kittens.slice(1,3)
      return removeFirstKitten
      }
    function removeLastKitten(){
      
      var removeLastKitten = kittens.slice(0,-1)
      return removeLastKitten
    }
    