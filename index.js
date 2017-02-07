const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
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
var kittensNew = [];
function appendKitten(name) {
  kittensNew = [...kittens, name]
  return kittensNew
  //nondestructive addition to end of array
}
function prependKitten(name) {
  kittensNew = [name, ...kittens]
  return kittensNew
  //nondestructive addition to beginning of array
}
function removeLastKitten() {
  return  kittens.slice(0 , kittens.length - 1)
//nondestructive removal of last item in array
  }
  function removeFirstKitten() {
    return kittens.slice(1)
    //remove first item of the array
  }
