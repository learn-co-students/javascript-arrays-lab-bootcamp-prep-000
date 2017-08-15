const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
var arraytomodify;
function destructivelyAppendKitten(name){

  kittens.push(name);
}

destructivelyAppendKitten("Ralph");
console.log('KIttens array after appending at end destructively:',kittens);

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

destructivelyPrependKitten("Bob");
console.log('KIttens array after prepending at end destructively:',kittens);

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

destructivelyRemoveLastKitten();
console.log('KIttens array after removing last element destructively:',kittens);

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

destructivelyRemoveFirstKitten();
console.log('KIttens array after removing first element destructively:',kittens);

function appendKitten(name){
 return [...kittens,name]

}

var newkittens=appendKitten("Broom");
console.log('appends a leaving the kittens array unchanged',newkittens);
console.log('original kittens',kittens);

function prependKitten(name){
  return [name,...kittens]
}

var prenewkitten=prependKitten("Arnold");
console.log('prepends a leaving the kittens array unchanged',prenewkitten);
console.log('original kittens',kittens);

function removeLastKitten(){
   return kittens.slice(0,kittens.length-1);
}

var lastkitten=removeLastKitten();
console.log('sliced last kittens ',lastkitten);
console.log('original kittens',kittens);

function removeFirstKitten(){
  return kittens.slice(1);
}

var firstkitten=removeFirstKitten();
console.log('sliced first kittens ',firstkitten);
console.log('original kittens',kittens);
