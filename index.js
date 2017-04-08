const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name);
  return newArray;
  // BootCamp Ans = return [...kittens, name]
}

function prependKitten(name){
  var newArray = [...kittens]
  newArray.unshift(name)
  return newArray

  // BootCamp Ans = return [name, ...kittens]
}

function removeLastKitten(){
  var newArray = [...kittens]
  newArray.pop()
  return newArray
  // Bootcamp Ans = return kittens.slice(1)
}

function removeFirstKitten(){
  var newArray = kittens.slice()
  newArray.unshift()
  return newArray
  // Bootcamp Ans = kittens.slice(0, kittens.length - 1)
}
