
kittens = ['Milo', 'Otis', 'Garfield']

destructivelyAppendKitten =function (name) {
 return kittens.push(name)
}

destructivelyPrependKitten = function (name) {
  return kittens.unshift(name)
}

destructivelyRemoveFirstKitten = function() {
  return kittens.shift()
}

destructivelyRemoveLastKitten=function(){
  return kittens.pop()
}
appendKitten = function(name){
  var one = kittens.push(name)
  return one
}
prependKitten = function(name){
  var two = kittens.unshift(name)
  return two
}

removeLastKitten = function(){
  var three = kittens.pop()
  return three
}

removeFirstKitten = function(){
  var four=kittens.shift()
  return four
}
