const app = "I don't do much."

function Arrays(){
var kittens = [ "Milo", "Otis", "Garfield" ];
return kittens;
}

function kittens(){
  var kittens = [ "Milo", "Otis", "Garfield" ];
  return kittens;
}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens ;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  var n = kittens.length;
  kittens.splice(n-1,1);
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.splice(0,1);
  return kittens;
}

function appendKitten(name){
  var kittens_new = [...kittens, name];
  return kittens_new;
}

function prependKitten(name){
  var kittens_new = [name, ...kittens];
  return kittens_new;
}

function removeLastKitten(){
  var n = kittens.length;
  var kittens_new = kittens.slice(0,n-1);
  return kittens_new;
}

function removeFirstKitten(){
  var n = kittens.length;
  var kittens_new = kittens.slice(1,n);
  return kittens_new;
}
