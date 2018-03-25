const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name)
{
  kittens.push(name)
  return kittens
  
}

function  destructivelyPrependKitten(name)
{
  kittens.unshift(name)
  return kittens
  
}

function destructivelyRemoveLastKitten()
{
  
   kittens.pop()
  return kittens
}

function  destructivelyRemoveFirstKitten() 
{
  kittens.shift()
  return kittens
  
  
}

function appendKitten(name)
{
  var new_kittens = [...kittens]
//  new_kittens.unshift(name)?
  new_kittens.push(name)
  
  return new_kittens
  
  
}

function prependKitten(name)
{
  var new_kittens = [...kittens]
   new_kittens.unshift(name)
  return new_kittens
}


function removeLastKitten()
{
var new_kittens = [...kittens]
 new_kittens.pop()
 return new_kittens
}

function removeFirstKitten()
{
 var new_kittens = [...kittens]
 new_kittens.shift()
 return new_kittens
  
}


