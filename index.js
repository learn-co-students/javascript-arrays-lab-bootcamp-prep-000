var kittens = ['Milo', 'Otis','Garfield'];
function destructivelyAppendKitten(Name){
  kittens.push('Ralph');
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return kittens
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten (name){
  return [...kittens, name];
}
function prependKitten(name){
  return [name, ...kittens];
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten(){
  return kittens.slice(1);
}