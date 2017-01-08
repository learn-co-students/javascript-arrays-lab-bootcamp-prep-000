const app = "I don't do much."


var kittens = ["Milo", "Otis", "Garfield"]


var destructivelyAppendKitten = function(name){
    kittens.push(name)
    return kittens
 }

var destructivelyPrependKitten = function(name){
    kittens.unshift(name)
    return kittens
}


var destructivelyRemoveLastKitten = function(){
    kittens.pop(1)
    return kittens
}

var destructivelyRemoveFirstKitten = function(){
    kittens.shift(1)
    return kittens
}

var appendKitten = function(name){
    return [...kittens, name]
}

var prependKitten = function(name) {
    return [name, ...kittens]
}

var removeLastKitten = function(){
  return kittens.slice(0, kittens.length -1)
}

var removeFirstKitten = function(){
  return kittens.slice(1)
}
