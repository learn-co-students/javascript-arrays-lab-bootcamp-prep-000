var kittens = ['Milo','Otis','Garfield'] 

// Add your functions and code here

function destructivelyAppendKitten(name) {
   kittens.push(name);
   return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var name_1= [...kittens,name];
  return name_1;
}

function prependKitten(name){
  var name_2=[name, ...kittens];
  return name_2
}

function removeLastKitten(){
  var caats= kittens.slice(0,kittens.length-1);
  return caats;
}

function removeFirstKitten(){
  var catts= kittens.slice(1)
  return catts
}
