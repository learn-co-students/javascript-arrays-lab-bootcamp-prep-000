const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
	kittens.push(name);
	return kittens;
}
function destructivelyPrependKitten(name){
	kittens.unshift(name);
	return kittens;
}
function destructivelyRemoveLastKitten(){
	kittens.pop();
	return kittens;
}
function destructivelyRemoveFirstKitten(){
	kittens.shift();
	return kittens;
}
function appendKitten(name){
	var macke = [...kittens];
	macke.push(name);
  return macke;
}
function prependKitten(name){
	var macke = [...kittens];
	macke.unshift(name);
  return macke;
}
function removeLastKitten(){
	var macke = [...kittens];
	macke.pop();
  return macke;
}
function removeFirstKitten(){
	var macke = [...kittens];
	macke.shift();
  return macke;
}