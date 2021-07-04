var kittens = [] //define your array here

// Add your functions and code here
/*function Arrays() {
  kittens = ["Milo", "Otis", "Garfield"];
}*/
//var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(name) {
 var newArray = [...kittens, name];
 return newArray;
}
function prependKitten(name) {
  var anotherArray = [name, ...kittens];
  return anotherArray;
}
function removeLastKitten() {
  var lessKittens = [...kittens];
  lessKittens.pop();
  return lessKittens;
}
  function removeFirstKitten() {
    var lessKittens = [...kittens];
    lessKittens.shift();
    return lessKittens;
  }
  