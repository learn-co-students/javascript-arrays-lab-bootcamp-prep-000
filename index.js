const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  var myKitt = kittens.shift(name)
  return myKitt
  
}

function destructivelyPrependKitten(name) {
  var myKitt = kittens.unshift(name)
  return myKitt
}