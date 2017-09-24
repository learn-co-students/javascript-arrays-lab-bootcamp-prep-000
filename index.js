const app = "I don't do much."
 +
 +function destructivelyAppendKitten(name) {
 +  kittens.push(name)
 +}
 +
 +function destructivelyPrependKitten(name) {
 +  kittens.unshift(name)
 +}
 +
 +function destructivelyRemoveLastKitten() {
 +  kittens.pop()
 +}
 +
 +function destructivelyRemoveFirstKitten() {
 +  kittens.shift()
 +}
 +
 +function appendKitten(name) {
 +  let updatedKittens = [...kittens, name]
 +  return updatedKittens
 +}
 +
 +function prependKitten(name) {
 +  let updatedKittens = [name, ...kittens]
 +  return updatedKittens
 +}
 +
 +function removeLastKitten() {
 +  let updatedKittens = kittens.slice(0, -1)
 +  return updatedKittens
 +}
 +
 +function removeFirstKitten() {
 +  let updatedKittens = kittens.slice(1)
 +  return updatedKittens
 +}
