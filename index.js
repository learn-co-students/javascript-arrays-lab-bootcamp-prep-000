const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"]
 var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten() {
kittens.push("Ralph");
return kittens
}

 var kittens = ["Milo", "Otis", "Garfield"];
 function destructivelyPrependKitten() {
   kittens.unshift("Bob");
   return kittens
 }
 
 var kittens = ["Milo", "Otis", "Garfield"];
 function destructivelyRemoveLastKitten() {
   kittens.pop();
   return kittens
 }
 
 var kittens = ["Milo", "Otis", "Garfield"];
 function destructivelyRemoveFirstKitten() {
   kittens.shift();
   return kittens
 }
 

 function appendKitten() {
    var kittens = ["Milo", "Otis", "Garfield"];
 var cat = "Broom"
  return [...kittens, cat]
 }
 
 
 function prependKitten() {
   var kittens = ["Milo", "Otis", "Garfield"];
 var cat = "Arnold"
   return [cat, ...kittens]
 }
 
  function removeLastKitten() {
   var kittens = ["Milo", "Otis", "Garfield"];
  return  kittens.slice(0, kittens.length - 1)
  }
  
  function removeFirstKitten() {
   var kittens = ["Milo", "Otis", "Garfield"];
   return kittens.slice(1)
  }