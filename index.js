const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']
//console.log(`Starting array: ${kittens}`)

function destructivelyAppendKitten(name){
  kittens.push(name)
  //console.log(kittens)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  //console.log(kittens)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  //console.log(kittens)
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  //console.log(kittens)
  return kittens
}

function appendKitten(name){
  var more_kittens = [...kittens, name]
  //console.log(more_kittens)
  return more_kittens
}

function prependKitten(name){
  var more_kittens = [name, ...kittens]
  //console.log(more_kittens)
  return more_kittens
}

function removeLastKitten(){
  //using slice(start_index, end_index)
  var less_kittens = kittens.slice(0, kittens.length-1)
  //console.log(kittens)
  //console.log(less_kittens)
  return less_kittens
}

function removeFirstKitten(){
  var less_kittens = kittens.slice(1)
  //console.log(less_kittens)
  return less_kittens
}
