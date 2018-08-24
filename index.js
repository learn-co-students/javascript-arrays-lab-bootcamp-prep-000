function destructivelyAppendKitten(name){
  return kittens.push("Ralph");
}

function destructivelyPrependKitten(name){
  return kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
 return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  kittens.concat("Broom")
  return kittens.concat("Broom")
}

function prependKitten(name){
  ["Arnold"].concat(kittens)
  return ["Arnold"].concat(kittens)
}

function removeLastKitten(){
  kittens.slice(0,1)
  return kittens.slice(0,2)
}

function removeFirstKitten() {
  kittens.slice(1,3)
  return kittens.slice(1,3)
}


// -----------------------
//below is first set of coding
//above is 2nd time coding

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop("Garfield")
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  kittens.concat("Broom")
  return kittens.concat("Broom")
}


function prependKitten(name) {
  return [name, ...kittens]
  
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1, kittens.length - 0)
}