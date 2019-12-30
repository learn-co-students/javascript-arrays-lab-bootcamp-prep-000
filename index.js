var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here


function destructivelyAppendKitten(name){
   kittens.push(name);
   return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}


function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}


function appendKitten(name){
  let newArr= [...kittens];
  newArr.push(name);
  return newArr;
  
}

function prependKitten(name) {
  let newArr= [...kittens];
  newArr.unshift(name);
  return newArr
}

function removeLastKitten(){
  let newArr =[].concat(kittens);
  newArr.pop();
  return newArr;
}

function removeFirstKitten(){
  let newArr= [].concat(kittens);
  newArr.shift();
  return newArr;
}