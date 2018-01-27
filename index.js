const app = "I don't do much."
var kittens=["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}
function appendKitten(name){
 var new1= kittens.slice();
new1.push(name);
return new1 ;

}
function prependKitten(name){
 var new1= kittens.slice();
new1.unshift(name);
return new1 ;
}
function removeLastKitten(name){
   var new1= kittens.slice();
new1.pop(name);
return new1 ;
}
function removeFirstKitten(name){
   var new1= kittens.slice();
new1.shift(name);
return new1 ;
}
