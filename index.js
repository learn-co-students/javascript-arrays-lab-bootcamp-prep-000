const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name, element){
	name.push(element);
	return name
}
function destructivelyPrependKitten(name, element){
  name.unshift(element);
}