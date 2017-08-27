var kittens = [`Milo`, `Otis`, `Garfield`];

function destructivelyAppendKitten(element){
  return kittens.push(element);//adds element to end of array
}

function destructivelyPrependKitten(element){
  return kittens.unshift(element);//adds element to beginning of array
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()//removes last element from array
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()//removes first eleemnt from array
}

function appendKitten(element){
  var appendedArray = [...kittens, element];
  return appendedArray;//adds element to end and returns new array
}

function prependKitten(element){
  var prependedArray = [element, ...kittens];
  return prependedArray;//adds element to beginning and returns new array
}

function removeLastKitten(){
  var lastKittenRemoved = kittens.slice(0, -1);
  return lastKittenRemoved;//removes last element and returns array
}

function removeFirstKitten(){
  var firstKittenRemoved = kittens.slice(1);
  return firstKittenRemoved;//removes frist element and returns new array
}
