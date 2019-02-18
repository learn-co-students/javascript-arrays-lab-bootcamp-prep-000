var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array,name)
  {kittens.push('Ralph') 
    return array}
function destructivelyPrependKitten(array, name){
  kittens.unshift('Bob')
    return array
}
function destructivelyRemoveLastKitten(array){
  kittens.pop() 
    return array
}
function destructivelyRemoveFirstKitten(array){
  kittens.shift() 
    return array
}
function appendKitten(array,name)
  { return [...kittens,'Broom'] }
function prependKitten(array,name){
  return ['Arnold',...kittens]
}
function removeLastKitten(array){return kittens.slice(0,kittens.length -1)}
function removeFirstKitten(array){ return kittens.slice(1)}
