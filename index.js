var kittens = [] //define your array here

// Add your functions and code here
//var kittens = ['Milo', 'Otis', 'Garfield']


 function destructivelyAppendKitten(name){
  kittens.push(name);
  return (kittens);
   
 }
 
 function destructivelyPrependKitten(name){
   kittens.unshift(name);
   return (kittens);
 }
 
 function destructivelyRemoveLastKitten(){
   kittens.pop();
   return (kittens);
 }
 function destructivelyRemoveFirstKitten(){
   kittens.shift();
   return(kittens);
 }
 
 function appendKitten(name){
   var appendKitten = [...kittens, name];
   return (appendKitten);
   
 }
 
  function prependKitten(name){
    var prependKitten = [name, ...kittens];
    return (prependKitten);
  }
  
  function removeLastKitten(){
    var newArray = kittens.slice(0, kittens.length -1);
    return (newArray);
  }
  
  function removeFirstKitten(){
    var newArray2 = kittens.slice(1);
    return (newArray2);
  }
 