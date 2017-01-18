const app = "I don't do much."

function destructivelyAppendKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.push("Ralph")
  console.log(kittens)
}

function destructivelyPrependKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift("Bob")
  console.log(kittens)
}

function destructivelyRemoveLastKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  console.log(kittens)
}

function destructivelyRemoveFirstKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  console.log(kittens)
}

function appendKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  var apkittens = [...kittens, "Broom"]
  return apkittens
}

function prependKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  var prkittens = ["Arnold", ...kittens]
  return prkittens
}

function removeLastKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  var rlkitten = kittens.slice(0, 2)
  return rlkitten
}

function removeFirstKitten() {
  kittens = ["Milo", "Otis", "Garfield"]
  var rfkitten = kittens.slice(1)
  return rfkitten
}
