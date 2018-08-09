function destructivelyAppendKitten(name){
  //var kittens = ["Milo", "Otis", "Garfield"];
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
 // var kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift(name);
  return kittens;
}
// Add your functions and code here

function destructivelyRemoveLastKitten(name){
 // var kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
 // var kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift();
  return kittens;
}

function appendKitten(name){
 // var kittens = ["Milo", "Otis", "Garfield"];
  var cutie = [...kittens, name];
  return cutie;
}

function prependKitten(name){
 // var kittens = ["Milo", "Otis", "Garfield"];
  var cutie = [name, ...kittens];
  return cutie;
}

function removeLastKitten(name){
 // var kittens = ["Milo", "Otis", "Garfield"];
  var cutie = kittens.slice(0, kittens.length -1);
  return cutie;
}

function removeFirstKitten(name){
  var cutie = kittens.slice(1);
  return cutie;
}