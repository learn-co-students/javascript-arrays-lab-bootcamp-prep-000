const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
//destructivelyAppendKitten(name)
function destructivelyAppendKitten(name){
  //var newKittens = [...kittens,name];
  var newKittens = kittens.push(name);
 	return newKittens;
	//return kittens;
}
function destructivelyPrependKitten(name){
  var newKittens = kittens.unshift(name);
  return newKittens;
}
function destructivelyRemoveLastKitten(name) {
  var newKittens = kittens;
  newKittens.pop();
  return newKittens;
}
function destructivelyRemoveFirstKitten(name){
	kittens.shift();
 	return kittens;
}
function appendKitten(name){
	var newKittens = kittens;
	newKittens =[...newKittens,name];
	return newKittens;
}
/*function prependKitten(name){
var newKittens = kittens;
	newKittens =[name,newKittens...];
	return newKittens;
}*/

function prependKitten(name){
var newKittens = kittens;
	//newKittens =[name,...newKittens];
	//newKittens.unshift(name)
	return [name,...kittens];
}
function removeLastKitten(){
        return kittens.slice(0,kittens.length -1);
}
function removeFirstKitten(){
	return kittens.slice(1,kittens.length);
}
