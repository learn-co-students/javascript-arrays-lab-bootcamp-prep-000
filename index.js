// Add your functions and code here
function destructivelyAppendKitten(name){
 kittens.push(name)
 return kittens
}
function destructivelyPrependKitten(name){
 kittens.unshift(name)
 
}
function destructivelyRemoveLastKitten(){
 kittens.pop(name)
 return kittens
}
function destructivelyRemoveFirstKitten(){
 kittens.shift(name)
 return kittens
}
function appendKitten(name){
return  name.slice(4);

}
function appendKitten(name){
  name.slice(5);
return [kittens, ...name];
}