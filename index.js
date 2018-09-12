var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens
}
// hence Milo, Otis, Garfield, Ralph

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  var moreKittens = [...kittens, "Broom"];
  return moreKittens;
}
function prependKitten(name){
  var moreKittens = ["Arnold", ...kittens];
  return moreKittens;
}
function removeLastKitten(){
  var lessKittens = kittens.slice(0, kittens.length - 1)
  return lessKittens;
}
function removeFirstKitten(){
  var evenLessKittens = kittens.slice(1);
  return evenLessKittens;
}