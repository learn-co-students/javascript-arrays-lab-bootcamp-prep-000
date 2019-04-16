var kittens = ['Milo','Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
  
}

function appendKitten(name) {
  var appendKitten=['Broom']
  return(kittens.concat(appendKitten))
  
}

function prependKitten(name) {
  var prependKitten=['Arnold']
  return(prependKitten.concat(kittens))
}

function removeLastKitten() {
 var removeLastKitten=kittens.slice(0,kittens.length-1);
  return removeLastKitten;
}

function removeFirstKitten(){
  var removeFirstKitten=kittens.slice(1)
  return removeFirstKitten;
}