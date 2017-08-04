const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

// 1

function destructivelyAppendKitten(name){
  console.log(`Before bad appendage: [${kittens}]`)
  kittens.push(name)
  console.log(`After bad appendage: [${kittens}]`)
  console.log()
  return kittens

}

destructivelyAppendKitten("Felix")

// 2

function destructivelyPrependKitten(name){
  console.log(`Before bad prependage: [${kittens}]`)
  kittens.unshift(name)
  console.log(`After bad prependage: [${kittens}]`)
  console.log()
  return kittens

}

destructivelyPrependKitten("O'Malley")

// 3

function destructivelyRemoveLastKitten(){
  console.log(`Before bad last removal: [${kittens}]`)
  kittens.pop(name)
  console.log(`After bad last removal: [${kittens}]`)
  console.log()
  return kittens

}

// 4

function destructivelyRemoveFirstKitten(){
  console.log(`Before bad first removal: [${kittens}]`)
  kittens.shift(name)
  console.log(`After bad first removal: [${kittens}]`)
  console.log()
  return kittens

}

// 5

function appendKitten(name){
  console.log(`Before good appendage: [${kittens}]`)
  var moreKittens = [...kittens, name]
  console.log(`After good appendage: [${moreKittens}] while kittens remains: [${kittens}]`)
  console.log()
  return moreKittens

}

// 6

function prependKitten(name){
  console.log(`Before good prependage: [${kittens}]`)
  var moreKittens = [name, ...kittens]
  console.log(`After good prependage: [${moreKittens}] while kittens remains: [${kittens}]`)
  console.log()
  return moreKittens

}

// 7

function removeLastKitten(){
  console.log(`Before good last removal: [${kittens}]`)
  var moreKittens = kittens.slice(0, kittens.length - 1)
  console.log(`After good last removal: [${moreKittens}]`)
  console.log()
  return moreKittens

}

// 8

function removeFirstKitten(){
  console.log(`Before good first removal: [${kittens}]`)
  var moreKittens = kittens.slice(1)
  console.log(`After good first removal: [${kittens}]`)
  console.log()
  return moreKittens

}
