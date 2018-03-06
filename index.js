var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name) {
  name = kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {
  name = kittens.unshift("Bob");
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
  name = [...kittens, "Broom"];
  return name;
}

function prependKitten(name) {
  name = ["Arnold", ...kittens];
  return name;
}

function removeLastKitten(name) {
  name = kittens.slice(0, kittens.length - 1);  
  return name;
}

function removeFirstKitten(name) {
  name = kittens.slice(1);   
  return name;
}

//(.slice(a, b) a & b are indexes. a--to the left of array b--to the right of the array 
//so kittens.length = 3 that's why we need to minus 1 to get the index 2
//remeber there are 3 items but index starts with 0 in this case it's (0, 1, 2)



