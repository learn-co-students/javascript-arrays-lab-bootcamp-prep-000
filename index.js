var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(Ralph){
  kittens.push(Ralph);
  return kittens;
}

function destructivelyPrependKitten(Bob){
 kittens.unshift(Bob);
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
 
function appendKitten(Broom) {
  return [...kittens, Broom];
}

function prependKitten(Arnold) {
  return [Arnold,...kittens];
}

function removeLastKitten(){
  return kittens.slice(0,2);
}

function removeFirstKitten(){
  return kittens.slice(1); 
}
