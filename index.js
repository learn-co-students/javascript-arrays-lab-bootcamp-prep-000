

var kittens=['Milo','Otis','Garfield']
var name='Ralph'
var names='Bob'

function destructivelyAppendKitten(name){
  var h=kittens.push(name)
  return h
}

function destructivelyPrependKitten(name){
  var f=kittens.unshift(name)
  return f
}

function destructivelyRemoveLastKitten(name){
  var j=kittens.pop(name)
  return j
}

function destructivelyRemoveFirstKitten(name){
  var j=kittens.shift(name)
  return j
}

function appendKitten(name){
  var t=[...kittens,name]
  return t
}

function prependKitten(name){
  var t=[name,...kittens]
  return t
}

function removeLastKitten(){
  var r=kittens.slice(0,kittens.length-1)
  return r
}

function removeFirstKitten(){
  var r=kittens.slice(kittens.length-2)
  return r
}
