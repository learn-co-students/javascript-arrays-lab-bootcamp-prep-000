var kittens = ["Milo", "Otis", "Garfield"]

//destruvielyAppendKitten(name) appends a kitten to the end of the ktitens array 
function destruvielyAppendKitten(name) {
  return kittens.push(name)
}

//destructivelyPrependKitten(name) prepends a kitten to the beginning of the ktitens array
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}