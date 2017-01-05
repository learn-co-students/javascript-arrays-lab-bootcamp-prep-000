var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(name){
  // mutated array original
  var endKitten = kittens.push(name)
  return endKitten
}

var destructivelyPrependKitten = function(name){
  // mutated array original
  var beginningKitten = kittens.unshift(name)
  return beginningKitten

}

var destructivelyRemoveLastKitten = function(){
  // mutated array original
  var removedKitten = kittens.pop()
  return removedKitten

}

var destructivelyRemoveFirstKitten = function(){
  // mutated array original
  var removeFirst = kittens.shift()
  return removeFirst
}

var appendKitten = function(name){
  // return new array - unchanged original
  var safeKittens = [...kittens, name]
  return safeKittens
}

var prependKitten = function(name){
  // return new array - unchanged original
  var saveKitten = [name, ...kittens]
  return saveKitten
}

var removeLastKitten = function(){
  // return new array - unchanged original
  var cuteCats = kittens.slice(0, kittens.length-1)
  return cuteCats
}

var removeFirstKitten = function(){
  // return new array - unchanged original
  var cats = kittens.slice(1)
  return cats
}
