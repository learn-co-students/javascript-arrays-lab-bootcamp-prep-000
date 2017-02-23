const app = "I don't do much."
var kittens=["Milo", "Otis", "Garfield"];
var destructivelyAppendKitten=(name)=>{
var newkittens=kittens.push(name)
  return newkittens
}
var destructivelyPrependKitten=(name)=>{
  var newkittens=kittens.unshift(name)
  return newkittens
}
var destructivelyRemoveFirstKitten=(name)=>{
  var newkittens=kittens.shift(name)
  return newkittens
}
var destructivelyRemoveLastKitten=(name)=>{
  var newkittens=kittens.pop(name)
  return newkittens
}
var appendKitten=(name)=>{
  var newkittens=[...kittens, name]
  return newkittens
}
var prependKitten=(name)=>{
  var newkittens=[name,...kittens]
  return newkittens
}
var removeLastKitten=(name)=>{
  var newkittens=kittens.slice(0, kittens.length -1)
  return newkittens
}
var removeFirstKitten=(name)=>{
  var newkittens=kittens.slice(1)
  return newkittens
}
