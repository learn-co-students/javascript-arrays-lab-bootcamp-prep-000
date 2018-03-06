function destructivelyAppendKitten(name){
kittens.push(name);
} //appends a kitten to the end of the kittens array
function destructivelyPrependKitten(name){
  kittens.unshift(name);
} //prepends a kitten to the beginning of the kittens array
function destructivelyRemoveLastKitten(){
  kittens.pop()
} //removes the last kitten from the kittens array
function destructivelyRemoveFirstKitten(){
  kittens.shift()
} //removes the First kitten from the kittens array
function appendKitten(name){
  return [...kittens, name]
} //appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name){
  return [name, ...kittens]
} //prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
} //removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten(){
return kittens.slice(1)
} //removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
