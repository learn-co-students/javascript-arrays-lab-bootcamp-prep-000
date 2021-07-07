var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten() {
  kittens.push("Ralph");
  return kittens
}
function destructivelyPrependKitten() {
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten() {
  let kittens3 = ["Broom"]
  return kittens.concat(kittens3);
}
function prependKitten() {
  let kittens4 = ['Arnold']
  return kittens4.concat(kittens);
}
function removeLastKitten() {
  let kittens1 = kittens.slice(0,2);
  return kittens1
 }
 function removeFirstKitten() {
   let kittens2 = kittens.slice(-2)
   return kittens2
 }