var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

  function destructivelyPrependKitten(name){
    kittens.unshift(name)
    return kittens
  }

      function destructivelyRemoveLastKitten(){
        kittens.pop()
        return kittens
      }

 function destructivelyRemoveFirstKitten(){
   kittens.shift()
   return kittens
 }

 function appendKitten(name){
   var newArr = kittens.concat(name)
   return newArr
 }

  function prependKitten(name){
    var newArr = [name].concat(kittens)
    return newArr
  }

 function removeLastKitten(){
   var newArr = kittens.slice(0,(kittens.length - 1))
   return newArr
 }

function removeFirstKitten(){
  var newArr = kittens.slice(1)
  return newArr
}