const app = "I don't do much."

function destructivelyAppendKitten(kit){
  // appends a kitten to the end of the kittens array
  return kittens.push(kit)
}
function destructivelyPrependKitten(kit){
  // prepends a kitten to the beginning of the kittens array:
  return kittens.unshift(kit)
}

function destructivelyRemoveLastKitten(){
  // removes the last kitten from the kittens array:
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(kit){
//   appends a kitten to the kittens array and returns a new array, leaving the kittens array
// unchanged:
  let kittens2 = [...kittens, kit]
  return kittens2
}

function prependKitten(kit) {
//   prepends a kitten to the kittens array and returns a new array, leaving the kittens arra
// y unchanged:
  let kittens2 = [kit,...kittens]
return kittens2
}

function removeLastKitten() {
 //  removes the last kitten in the kittens array and returns a new array, leaving the kittens
 // array unchanged:
  let kittens2 = [...kittens]
  kittens2.pop()
  return kittens2
}

function removeFirstKitten(){
//   removes the first kitten from the kittens array and returns a new array, leaving the kit
// tens array unchanged:
  let kittens2 = [...kittens]
   kittens2.shift()
   return kittens2
}
