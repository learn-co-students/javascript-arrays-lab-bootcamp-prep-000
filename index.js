const app = "I don't do much."

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
]

function destructivelyAppendKitten(){
  kittens.push ("Ralph")
  return kittens
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob")
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


function appendKitten(){
  var moreKittens = [...kittens, "Broom"]
  return moreKittens
}

function prependKitten(){
  var furtherKittens = ["Arnold", ...kittens]
  return furtherKittens
}

function removeLastKitten(){
  var allTheKittens = kittens.slice(0,kittens.length - 1)
  return allTheKittens
}

function removeFirstKitten(){
  var noMoreKittens = kittens.slice(1)
  return noMoreKittens
}
