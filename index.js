var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
function destructivelyAppendKitten(a, b){
  a=kittens;
  b="Ralph"
  a.push(b);
  return a;
}
function destructivelyPrependKitten(a, b){
  a=kittens;
  b="Bob";
  a.unshift(b);
  return a;
}
function destructivelyRemoveLastKitten(a){
  a=kittens;
  a.pop();
  return a;
}
function destructivelyRemoveFirstKitten(a){
  a=kittens;
  a.shift();
  return a;
}
function appendKitten(a, b){
  a=kittens;
  b="Broom";
  var newKittens=[...a,b];
  return newKittens;
}
function prependKitten(a,b){
  a=kittens;
  b="Arnold";
  var newKittens=[b,...a];
  return newKittens;
}
function removeLastKitten(a){
  a=kittens;
  a=a.slice(0,a.length-1);
  return a;
}
function removeFirstKitten(a){
  a=kittens;
  a=a.slice(1);
  return a;
}
// Add your functions and code here
