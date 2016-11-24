const app = "I don't do much."

let kittens = ["Milo", "Otis", "Garfield"]

let destructivelyAppendKitten = x => {
  kittens.push(x)
  return kittens
}

let destructivelyPrependKitten = x => {
  kittens.unshift(x)
  return kittens
}

let destructivelyRemoveLastKitten = () => {
  kittens.pop()
  return kittens
}

let destructivelyRemoveFirstKitten = () => {
  kittens.shift()
  return kittens
}

let appendKitten = x => {
  let xs = kittens.slice()
  xs.push(x)
  return xs
}

let prependKitten = x => {
  let xs = kittens.slice()
  xs.unshift(x)
  return xs
}

let removeLastKitten = () => {
  let xs = kittens.slice()
  xs.pop()
  return xs
}

let removeFirstKitten = () => {
  let xs = kittens.slice()
  xs.shift()
  return xs
}
