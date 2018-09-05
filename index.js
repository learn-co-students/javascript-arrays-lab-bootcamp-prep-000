var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

destructivelyAppendKitten('Ralph');


function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

destructivelyPrependKitten('Bob');


function destructivelyRemoveLastKitten(){
  kittens.pop(-1);
  return kittens;
}


function destructivelyRemoveFirstKitten(){
  kittens.shift(0);
  return kittens;
}


function appendKitten(name){
  kittens.splice(3, 0, name);
    
   return kittens;
   
  
}

appendKitten("Broom");



function prependKitten(name){
  kittens.splice(0, 0, name);
  
  return kittens;
  
}

prependKitten("Arnold");



function removeLastKitten(){
  console.log(kittens.slice(0, 1));
  
}


function removeFirstKitten(){
  console.log(kittens.slice(1));
  
}