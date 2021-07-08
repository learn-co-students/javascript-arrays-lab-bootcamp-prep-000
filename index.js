var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(element) {
  
  kittens.push(element);
  
  return kittens;
  
}

function destructivelyPrependKitten(element) {
  
  kittens.unshift(element);
  
  return kittens;
  
}

function destructivelyRemoveLastKitten(element) {
  
  kittens.pop(element);
  
  return kittens;
  
}

function destructivelyRemoveFirstKitten(element) {
  
  kittens.shift(element);
  
  return kittens;
  
}

  function appendKitten(array){
  
  array = kittens.concat('Broom');
   
   return array;
   
  }
  
  function prependKitten(array) {
    
    
   array = ["Arnold", ...kittens];
   
   return array;
    
  }
  
  function removeLastKitten(array) {
    
    
    
   array = [...kittens];
   
   array.splice(2,1);
    
    return array;
    
  }
  
  function removeFirstKitten(array) {
    
    array = [...kittens];
    
    array.splice(0,1);
    
    return array;
  }
