const app = "I don't do much."
 var kittens = ['Milo', 'Otis', 'Garfield'];
 
 function destructivelyAppendKitten(name){
 //kittens = ['Milo', 'Otis', 'Garfield']
  kittens.push("Ralph")
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
/*
function appendKitten(name) {
  var newArray = [
    kittens[0],
    kittens[1],
    kittens[2],
    name
  ];
  return newArray;
};*/
function appendKitten(name){
   var newArray = [...kittens,name];
  return newArray
   
}

function prependKitten(name){
   var newArray = ["Arnold", ...kittens]
   return newArray
}

function removeFirstKitten(){
  var newArray = [...kittens.slice(1)]
  return newArray;
}
function removeLastKitten(array){
 // array.slice(0, array.length - 1)
  var newArray = kittens.slice(0, kittens.length -1);
  return newArray;
}
