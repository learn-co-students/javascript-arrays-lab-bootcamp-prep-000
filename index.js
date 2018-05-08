var kittens = ['Milo','Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
}
function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
[kittens, ... 'Broom']
return kittens
 
}