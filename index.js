var kittens= [`Milo`,`Otis`,`Garfield`]
var element;
var hello;
var hey;

function destructivelyAppendKitten(element){
  kittens.push(element)
  return kittens;
}

function destructivelyPrependKitten(element){
  kittens.unshift(element)
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens;
}

function appendKitten(element){
  return [...kittens,element]
}

function prependKitten(element){
  return [element, ...kittens]
}

function removeLastKitten(hello){
  hello=kittens.slice(0,kittens.length-1)
  return hello;
}

function removeFirstKitten(hello){
  hello=kittens.slice(-2)
  return hello
}