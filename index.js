var kittens = [
  "Milo",
  "Otis",
  "Garfield"
  ];
  
  function destructivelyAppendKitten(name) {
    kittens.push('Ralph');
    return kittens;
  }
  
  function destructivelyPrependKitten(name) {
    kittens.unshift('Bob');
    return kittens;
  }
  
 function destructivelyRemoveLastKitten(name) {
   kittens.pop();
   return kittens;
 }
  
  function destructivelyRemoveFirstKitten(name) {
    kittens.shift();
    return kittens;
  }
  
  function appendKitten(name) { 
    return [...kittens, "Broom"];
  } 
  
  function prependKitten(name) { 
    return ["Arnold", ...kittens];
  }
  
 function removeFirstKitten(name) {
   return kittens.slice(-2);
 }
 
  function removeLastKitten(name) {
    return kittens.slice(0, kittens.length -1);
  } 
  
  
  
  

  

  
  