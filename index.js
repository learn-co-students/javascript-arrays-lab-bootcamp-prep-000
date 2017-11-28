const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten() {
return [...kittens, "Broom"]
}
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
