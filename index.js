const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
	kittens.push(name);
	return kittens;
}



function destructivelyPrependKitten(name){
	kittens.unshift(name);
	return kittens;
}




function destructivelyRemoveLastKitten( ){
	kittens.pop();
	return kittens;
}



function destructivelyRemoveFirstKitten( ){

	kittens.shift();
	return kittens;
}



function appendKitten(name){
	
//	var kittens = ["Milo", "Otis", "Garfield"]
	var kittenlets = [...kittens, name];
	return kittenlets;	
}


function prependKitten(name){

//	var kittens = ["Milo", "Otis", "Garfield"]
	var kittenlets = [name, ...kittens];
	return kittenlets;
}



function removeLastKitten( ){

//	var kittens = ["Milo", "Otis", "Garfield"]
	var kittenlet = kittens.slice(0, kittens.length - 1);
	return kittenlet;
}


function removeFirstKitten( ){

	//var kittens = ["Milo", "Otis", "Garfield"];
	var kittenlets = kittens.slice(1);
	return kittenlets;
}