const app = "I don't do much."
kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(arr)
{
  kittens=[...kittens,arr]
}
function destructivelyPrependKitten(arr)
{
  kittens.unshift(arr)
}
function destructivelyRemoveLastKitten(arr){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(arr){
  kittens.shift()
}
