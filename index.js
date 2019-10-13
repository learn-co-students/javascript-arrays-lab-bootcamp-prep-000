const app = "I don't do much.";

var kittens = ["Milo","Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (kittens) {
kittens.push("ralph")
return kittens ()
console.log (kittens)
}
function destructivelyPrependKitten (kittens){
kittens.unshift("Bob")
return kittens();
}
function destructivelyremovelastkittens(kittens){
 kittens.pop()
 return kittens()
}
function destructivelyremovefirstkittens(kittens){
   kittens.shift()
   return kittens()
}
function  appendKitten (kittens){
  return kittens ()
}
function prependKitten(kittens) {
  return kittens ()
}
function removelastKitten (kittens) {
 kittens.pop ()
 return kittens ()
 console.log (kittens)
}
function removefirstKitten() {
 kittens.splice(-1)
}
