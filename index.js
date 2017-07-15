//var kittens = ['Milo','Otis','Garfield']

function prependKitten(kittens,name){
  //var kittens = ['Milo','Otis','Garfield']
  return [name, ...kittens]
}

function appendKitten(kittens,name){
  //var kittens = ['Milo','Otis','Garfield']
  return [...kittens, name]
}

function destructivelyAppendKitten(kittens,name){
  //var kittens = ['Milo','Otis','Garfield']
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(kittens,name){
  //var kittens = ['Milo','Otis','Garfield']
  kittens.unshift(name)
  return kittens
}

function removeLastKitten(kittens){
  //var kittens = ['Milo','Otis','Garfield']
  return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(kittens){
  //var kittens = ['Milo','Otis','Garfield']
  return kittens.slice(1)
}

function destructivelyRemoveFirstKitten(kittens){
  //var kittens = ['Milo','Otis','Garfield']
  kittens.shift()
  return kittens
}
function destructivelyRemoveLastKitten(kittens){
  //var kittens = ['Milo','Otis','Garfield']
  kittens.pop()
  return kittens
}
