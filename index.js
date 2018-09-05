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
  
  var newKittens = kittens.splice(0, 3, 'Milo', 'Otis', 'Garfield');
  newKittens.push(name);
  
    
   return newKittens;
   
  
}

appendKitten("Broom");



function prependKitten(name){
  var newKittens = kittens.splice(0, 3, 'Milo', 'Otis', 'Garfield');
  newKittens.unshift(name);
  
  return newKittens;
  
}

prependKitten("Arnold");



function removeLastKitten(){
  console.log(kittens.slice(0, 1));
  
}


function removeFirstKitten(){
  console.log(kittens.slice(1));
  
}