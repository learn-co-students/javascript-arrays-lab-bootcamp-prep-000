// const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  // console.log("removing last kitten")
  var newArr = [...kittens]
  newArr.pop()
  return newArr
}

function removeFirstKitten() {
  var newArr = [...kittens]
  newArr.shift()
  return newArr
}

/*console.log(kittens)
var res = removeLastKitten()
console.log(res)
*/
