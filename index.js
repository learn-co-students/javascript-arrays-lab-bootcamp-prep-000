const app = "I don't do much."
var kittens = new Array();
/*
1) Arrays destructivelyAppendKitten(name) appends a kitten to the end of the kittens array:
     ReferenceError: destructivelyAppendKitten is not defined
      at Context.<anonymous> (test/index-test.js:14:7)
*/
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

/*
  2) Arrays destructivelyPrependKitten(name) prepends a kitten to the beginning of the kittens array:
     ReferenceError: destructivelyPrependKitten is not defined
      at Context.<anonymous> (test/index-test.js:21:7)
*/
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

/*
  3) Arrays destructivelyRemoveLastKitten() removes the last kitten from the kittens array:
     ReferenceError: destructivelyRemoveLastKitten is not defined
      at Context.<anonymous> (test/index-test.js:29:7)
*/
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  return [...kittens,name]
}

function prependKitten(name){
  return [name,...kittens]
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
