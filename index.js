var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name){
  return kittens.push('Ralph')
 }
 var result = destructivelyAppendKitten(kittens)
 console.log(result);
 
 function destructivelyPrependKitten(name){
   return kittens.unshift('Bob')
 }
 var result = destructivelyPrependKitten(kittens)
 console.log(result);
 
 function destructivelyRemoveLastKitten(name){
  return kittens.pop('Garfield')
 }
 var result = destructivelyRemoveLastKitten(kittens)
 console.log(result);
 
 function destructivelyRemoveFirstKitten(name){
  return kittens.shift('Milo')
 }
 var result = destructivelyRemoveFirstKitten(kittens)
 console.log(result);
 
 function appendKitten(name){
   return [...kittens, 'Broom' ]
  }
  var result = appendKitten(kittens)
  console.log(result);
  
  function prependKitten(name){
   return ['Arnold', ...kittens]
  }
  var result = prependKitten(kittens)
  console.log(result);

function removeLastKitten(name){
 return kittens.slice(0, kittens.length - 1 )
}
var result = removeLastKitten(kittens)
console.log(result);  
  
function removeFirstKitten(name){
 return kittens.slice(1) 
}
var result = removeFirstKitten(kittens)
console.log(result);  
  
  
  
  