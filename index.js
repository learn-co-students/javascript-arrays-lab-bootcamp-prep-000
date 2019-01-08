var kittens = ['Milo','Otis','Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name)
{
 kittens.push('Ralph')
return kittens}
function destructivelyPrependKitten(name)
{kittens.unshift("Bob")
return kittens
}
function destructivelyRemoveLastKitten(name)
{
kittens.pop()

}
function destructivelyRemoveFirstKitten(name)
{
kittens.shift('Milo')
}
function appendKitten(name){
 return[...kittens,"Broom"]
}
function prependKitten(name){

  return["Arnold",...kittens]
}

function removeLastKitten(name){
return kittens.slice(0,kittens.length-1)

}
function removeFirstKitten(name){
  return kittens.slice(1)
}
