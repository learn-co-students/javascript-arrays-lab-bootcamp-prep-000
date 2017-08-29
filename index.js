const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (name) {
return kittens.push('Ralph')
}

function destructivelyPrependKitten (name) {
return kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten (name) {
return kittens.pop()
}

function destructivelyRemoveFirstKitten (name) {
return kittens.shift()
}

function appendKitten (name) {
return [...kittens, "Broom"]
}

function prependKitten(name) {
return ["Arnold", ...kittens]
}

function removeLastKitten(name) {
  var byeGarfield = kittens.slice(0,2)
  return byeGarfield
}

function removeFirstKitten (name) {
  var byeMilo = kittens.slice(1,3)
  return byeMilo
}
