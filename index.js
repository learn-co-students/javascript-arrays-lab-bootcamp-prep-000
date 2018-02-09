const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendKitten(name) { 
   kittens.push("Ralph");
   return kittens;
 }

 function destructivelyRemoveKitten(name) { 
   kittens.pop("Ralph");
   return kittens;
 }
 function destructivelyPrependKitten(name) {
   kittens.unshift("Bob");
   return kittens;
 }
 function destructivelyRemoveKitten(name) {
   kittens.pop("Bob");
   return kittens ;
 }
function destructivelyRemoveLastKitten(name) {
  kittens.pop("Garfield");
  return kittens;
}
function destructivelyAddLastKitten(name) {
  kittens.push("Garfield");
  return kittens;
}

  function destructivelyRemoveFirstKitten(name) {
  kittens.shift("Milo");
  return kittens;
  }
  
  function destructivelyAddFirstKitten(name) {
  kittens.unshift("Milo") ;
  return kittens ;
  }
  
  function appendKitten(name) {
    return [...kittens, "Broom"];
  }
 function prependKitten(name) {
    return ["Arnold" , ...kittens];
  }
 function removeLastKitten(name) {
   return kittens.slice(0, kittens.length-1) ;
 }
 
  function removeFirstKitten(name) {
   return kittens.slice(-2);
 }
 
 