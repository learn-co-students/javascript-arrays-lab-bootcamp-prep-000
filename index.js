const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){  // Creates function to push kitten's name to end of the array
  return kittens.push(name)  // returns a mutated array moving kittenn's name to the end of the array
}
function destructivelyPrependKitten(name){  // Creates function that prepends Kitten name to the top of the list
  return kittens.unshift(name)  // returns mutated array with new name at the front of the array
}
function destructivelyRemoveLastKitten(){ // Function removes last kitten's name from the array
  return kittens.pop() //removes last kitten's name from the array
}
function destructivelyRemoveFirstKitten(){  // Function removes first kitten from the array
  return kittens.shift()
}
function appendKitten(name){ // Function adds new name to the kittens array and doesn't change the original array
  return [...kittens, name] // return array with new name at the end without altering the original
}
function prependKitten(name) { //Function adds new naem to the beginning of the kittens array and doesn't change the original
  return [name, ...kittens]
}
function removeLastKitten() { // Removes last kitten from the array without effecting the original array
  return kittens.slice(0, kittens.length-1) // Showing a copy of the array at the specific positions I want to show
}
function removeFirstKitten(){ // function removes first name in the array without effecting the array
  return kittens.slice(-2) // slice returns the two pieces of the array we want without changing the original
}
