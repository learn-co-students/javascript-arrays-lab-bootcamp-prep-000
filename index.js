var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten (name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten (name){
  kittens.pop(name);
  return kittens;
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}
function appendKitten (name){
  var newKitArr = [... kittens];
  newKitArr.push(name);
  return newKitArr;
}
function prependKitten(name){
  var newKitArr = [... kittens];
  newKitArr.unshift(name);
  return newKitArr;
}
function removeLastKitten(name){
  var newKitArr = [... kittens];
  newKitArr.pop(name);
  return newKitArr;
}
function removeFirstKitten(name){
  var newKitArr = [... kittens];
  newKitArr.shift(name);
  return newKitArr;
}