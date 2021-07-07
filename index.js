var kittens = ["Milo", "Otis", "Garfield"]

function arrays() {
 return kittens
}
console.log(kittens)

function destructivelyAppendKitten() {
  return kittens.push("Ralph")
}
console.log(kittens)

function destructivelyPrependKitten() {
  return kittens.unshift("Bob")
}
console.log(kittens)

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
console.log(kittens)

function destructivelyRemoveFirstKitten() {
  return kittens.shift()}
  
console.log(kittens)

function appendKitten() {
  return [...kittens, "Broom"] }

function prependKitten() {
  return ["Arnold",...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}  

function removeFirstKitten() {
  return kittens.slice(1)
}  
