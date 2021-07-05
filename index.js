var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten() {
  kittens.push('Ralph')
}

function destructivelyPrependKitten() {
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return kittens.concat(name)
}

// function prependKitten(name) {
//   let newKittens = ['Arnold']
//   let newKittens1 = kittens.slice()
//   return newKittens.concat(newKittens1)
// }

// function prependKitten(name) {
//   let newKittens = kittens.slice()
//   newKittens.unshift(name)
//   return newKittens
// }

function prependKitten(name) {
  return [name,...kittens]
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length - 1)
}

let removeFirstKitten = ()=>{

  return kittens.slice(1)
}
