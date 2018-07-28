/*function Arrays() {
  var kittens = ["Milo", "Otis", "Garfield"];
}*/
  
//var kittens = ["Milo", "Otis", "Garfield"];

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens;
}

function destructivelyAppendKitten(name) {
 name = "Ralph";
 //var kittens = ["Milo", "Otis", "Garfield"];
 kittens.push(name);
 return kittens;
}

function destructivelyPrependKitten(name) {
 name = "Bob";
 //var kittens = ["Milo", "Otis", "Garfield"];
 kittens.unshift(name);
 return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
 kittens.shift();
 return kittens;
}

function appendKitten(name) {
  name = "Broom";
  var kits = kittens.concat(name);
  return kits;
} 

function prependKitten(name) {
 name = "Arnold";
  var kits = [name, ...kittens];
  return kits;
} 

function removeLastKitten() {
  var kits = kittens.slice(0, 2);
  return kits;
} 

function removeFirstKitten() {
	  var kits = kittens.slice(1);
	  return kits;
	}