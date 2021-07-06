var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendKitten(element){
  kittens.push(element);
  return kittens;
}
//using the push to mutate original function while adding an element to the end

function destructivelyPrependKitten(element){
  kittens.unshift(element);
  return kittens;
}
//using the unshift to mutate original function while adding an element to the beginning

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
//uses pop

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
//uses unshift

function appendKitten(element){
  var newKittens = [...kittens, element]
  return newKittens;
}
//uses spread operator to put element in the back without mutation

function prependKitten(element){
  var newKittens = [element, ...kittens];
  return newKittens;
}
//usese spread operator to put element in the beginning without mutation

function removeLastKitten(){
  return kittens.slice(0,2);
}

function removeFirstKitten(){
  return kittens.slice(1);
}

