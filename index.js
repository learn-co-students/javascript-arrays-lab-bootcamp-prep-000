const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
} // passed


function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
} // passed


function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
} // passed


function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
} // passed


// appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name){
  return[...kittens, name];
} // passed

// prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name){
  return[name, ...kittens];
} // passed

// removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
//EXAMPLE JAVASCRIPT ARRAYS LAB
// var iceCreams = ["chocolate", "vanilla", "raspberry"]
// iceCreams.slice(0, iceCreams.length - 1) // ["chocolate", "vanilla"]

function removeLastKitten(name){
  return kittens.slice(0, kittens.length - 1)
} // passed


// removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
//EXAMPLE JAVASCRIPT ARRAYS LAB
// var iceCreams = ["chocolate", "vanilla", "raspberry"]
// iceCreams.slice(0)

function removeFirstKitten(){
  return kittens.slice(1)
} // passed
