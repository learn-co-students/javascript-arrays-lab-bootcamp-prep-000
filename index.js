const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(element)
{
  kittens.push(element)
  return kittens
}

function destructivelyPrependKitten(element)
{
  kittens.unshift(element)
  return kittens
}

function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten()
{
  kittens.shift()
  return kittens
}

function appendKitten(name)
{
  var newKittenArray = [...kittens, name]
  return newKittenArray
}

function prependKitten(name)
{
  var newKittenArray =[name , ...kittens]
  return newKittenArray
}

function removeLastKitten()
{
  var newKittenArray = kittens.slice(0,kittens.length-1)
  return newKittenArray
}

function removeFirstKitten()
{
  var newKittenArray = kittens.slice(1)
  return newKittenArray
}