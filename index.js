const app = "I don't do much."
function kitttens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function appendKitten(name){
  var newK = [...kittens];
  
  newK.push(name);
  
  return newK;
}
function prependKitten(name){
  var newK = [...kittens];
  
  newK.unshift(name);
  
  return newK;
}
function removeLastKitten(){
  var newK = [...kittens];
  
  newK.pop();
  
  return newK;
}

function removeFirstKitten(){
  var newK = [...kittens];
  
  newK.shift();
  
  return newK;
}