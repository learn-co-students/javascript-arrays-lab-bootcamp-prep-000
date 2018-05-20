const app = "I don't do much.";

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

 function appendKitten(name){
   return [...kittens,name] 
   
 }
   
 function destructivelyRemoveFirstKitten(){
kittens.shift();
return kittens
 } 
 
 function prependKitten (name){
   return [name,...kittens]
   
 }

function removeLastKitten(){
  var newKittens = [...kittens]
 newKittens.pop()
  return newKittens
 }
 
 function removeFirstKitten(){
   var newk=[...kittens]
   newk.shift()
   return newk;
 }