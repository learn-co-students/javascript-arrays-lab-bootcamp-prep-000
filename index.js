const app = "I don't do much.";
function destructivelyAppendKitten(name) {
    kittens.push(name);
    return kittens;
} 
function destructivelyPrependKitten(name){
   kittens.unshift(name);
    return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name);
    return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift(name);
  return kittens
}
function appendKitten(name){
 return kittens.concat(name)
 }
 function prependKitten(name){
    var newVar = [name].concat(kittens)
   return newVar
 }
 function removeLastKitten(){
   return kittens.slice(0,2)
 }
 function removeFirstKitten() {
   return kittens.slice(1,3)
 }