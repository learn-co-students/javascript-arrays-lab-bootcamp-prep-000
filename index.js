const app = "I don't do much.";


var kittens=["Milo","Otis","Garfield"];
function destructivelyAppendKitten(Ralph){
  kittens.push(Ralph);
    return (kittens);
}

var kittens=["Milo","Otis","Garfield"];
function destructivelyPrependKitten(name){
  kittens.unshift(name);
    return (kittens);
}

var kittens=["Milo","Otis","Garfield"];
function destructivelyRemoveLastKitten(){
  kittens.pop();
    return kittens;
}

var kittens=["Milo","Otis","Garfield"];
function destructivelyRemoveFirstKitten(){
kittens.shift();
  return kittens;
}

var kittens=["Milo","Otis","Garfield"];
function appendKitten(name){
  return[...kittens, name];
}

var kittens=["Milo","Otis","Garfield"];
function prependKitten(name){
  return[name,...kittens];
}


function removeLastKitten(){
  kittens=kittens.slice(0, kittens.length-1);
return kittens;
}



function removeFirstKitten(){
  kittens=kittens.slice(1);
return kittens;
}



