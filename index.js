var kittens = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendKitten(name){ 
kittens.push(name) ;
return kittens ;
} 

kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(name){ 
kittens.unshift(name) ;
return kittens ;
} 

kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten(name){ 
kittens.pop(name) ;
return kittens ;
} 

kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten(name){ 
kittens.shift(name) ;
return kittens ;
} 

kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(name){
  var newArray = [...kittens];
  newArray.push(name);
  return newArray;
}

kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(name){
  var newArray = [...kittens];
  newArray.unshift(name);
  return newArray;
}

kittens = ['Milo', 'Otis', 'Garfield'];
function removeLastKitten(name){
  var newArray = [...kittens];
  newArray.pop(name);
  return newArray;
}

kittens = ['Milo', 'Otis', 'Garfield'];
function removeFirstKitten(name){
  var newArray = [...kittens];
  newArray.shift(name);
  return newArray;
}





