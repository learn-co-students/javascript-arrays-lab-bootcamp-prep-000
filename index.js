var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten (x){
  var y = kittens.push(x)
  return y
  }
  var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyPrependKitten (x){
  var y = kittens.unshift(x)
  return y
  }
   var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveLastKitten (x){
  var y = kittens.pop(x)
  return y
  }
  var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveFirstKitten (x){
  var y = kittens.shift(x)
  return y
  }
  
  var kittens = ['Milo', 'Otis', 'Garfield']
function appendKitten (x){
  var y = [...kittens, x]
  return y
  }
  
   var kittens = ['Milo', 'Otis', 'Garfield']
function prependKitten (x){
  var y = [x,...kittens]
  return y
  }
  
   var kittens = ['Milo', 'Otis', 'Garfield']
function removeLastKitten (x){
  var y = kittens.slice(0,2)
  return y
  }
  
  var kittens = ['Milo', 'Otis', 'Garfield']
function removeFirstKitten (x){
  var y = kittens.slice(1,3)
  return y
  }
  
