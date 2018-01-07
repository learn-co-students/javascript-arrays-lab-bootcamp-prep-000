const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten() {
      kittens.push("Ralph")
      return kittens
}
function destructivelyPrependKitten() {
      kittens.unshift("Bob")
      return kittens
}
function destructivelyRemoveLastKitten() {
     
      kittens.pop()
      return kittens
}
function destructivelyRemoveFirstKitten() {
     
      kittens.shift()
      return kittens
}
function appendKitten() {
     var kittens2 = [...kittens, "Broom"]
      return kittens2
}
function prependKitten() {
     var kittens3 = ["Arnold",...kittens]
      return kittens3
}

function removeLastKitten() {
     var kittens4 = kittens.slice(0,length-1)
      return kittens4
}
function removeFirstKitten() {
     var kittens5 = kittens.slice(1)
      return kittens5
}









