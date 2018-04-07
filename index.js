const app = "I don't do much."
function kittens() {
  var kittens = ["Milo","Otis","Garfield"]
  return kittens
  }
  function destructivelyAppendKitten(newKitten) {
    kittens.push(newKitten)
    return kittens
  }
  function destructivelyPrependKitten(newKitten){
    kittens.unshift(newKitten)
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
  function appendKitten(newKitten){
    return [...kittens, newKitten]
  }
  function prependKitten(newKitten){
    return [newKitten, ...kittens]
  }
  function removeLastKitten(){
    var kittens2
    kittens2 = kittens.slice(0,kittens.length-1)
    return kittens2
  }
  function removeFirstKitten(){
    var kittens2
    kittens2 = kittens.slice(1)
    return kittens2
    
  }