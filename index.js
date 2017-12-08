const app = "I don't do much."

var kittens=['Milo','Otis','Garfield'];

function arrays() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
return arrays
}

function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens
}

function destructivelyAppendKitten(name) {
kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}

function destructivelyRemoveLastKitten(){
  var Kittens=['Milo','Otis','Garfield'];{
  Kittens.pop('Garfield')
}
  return kittens=['Milo','Otis'];
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
var kittens=['Milo','Otis','Garfield'];{
  [...kittens,'Broom']
}
 return kittens=['Milo','Otis','Garfield','Broom'];
}

function prependKitten(name){
  var kittens=['Milo','Otis','Garfield']; {
  ['Arnold',...'Kittens']
}
  return kittens=['Arnold','Milo','Otis','Garfield'];
}

function removeLastKitten() { {
  var kittens =['Milo','Otis','Garfield'];
  kittens.slice(kittens.length -1)
}
 return kittens= ['Milo','Otis'];
 }

function removeFirstKitten(){{
  var kittens=['Milo','Otis','Garfield'];
  return kittens.slice(1)
}
return kittens=['Otis','Garfield','Garfield'];
}
