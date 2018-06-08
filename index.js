const app = "I don't do much."

function destructivelyAppendKitten(name) {
    kittens.push(name);
    return;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return;
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name);
  return;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift(name);
  return;
}
function appendKitten(name){
  var returnArray = kittens.slice();
  returnArray.push(name);
  return returnArray;
}
function prependKitten(name) {
  var returnArray = kittens.slice();
  returnArray.unshift(name);
  return returnArray;
}
function removeLastKitten(){
  var returnArray = kittens.slice();
  returnArray.pop(name);
  return returnArray;
}
function removeFirstKitten(){
  var returnArray = kittens.slice();
  returnArray.shift(name);
  return returnArray;
}
