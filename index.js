let kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
return kittens.push(name);
}
function destructivelyPrependKitten(name){
 return kittens.unshift(name);
}
function destructivelyRemoveLastKitten() { 
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  let kittens2 = [];
  kittens.forEach((val)=>{
    kittens2.push(val);
  });
  kittens2.push(name);
  return kittens2;
}
function prependKitten(name) {
var ace=[];
var ace = kittens.concat(ace);
ace.unshift(name);
return ace;
}
function removeLastKitten() {
  var kittens2 = [];
    kittens.pop();
  var kittens2 = kittens.concat(kittens2);
  return kittens2;
}