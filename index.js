var kittens=['Milo', 'Otis', 'Garfield'];

function kittensFunction(){
	return kittens;
	}

function destructivelyAppendKitten(name){
	kittensFunction();
	kittens.push('Ralph');
	return kittens;
	}

function destructivelyPrependKitten(name){
	kittensFunction();
	kittens.unshift('Bob');
	return kittens;
	}
function destructivelyRemoveLastKitten(){
	kittensFunction();
	kittens.pop();
	return kittens;
	}

function destructivelyRemoveFirstKitten(){
	kittensFunction();
	kittens.shift();
	return kittens;
	}

function appendKitten(name){
	kittensFunction();
  return [...kittens,'Broom'];
	
	}
function prependKitten(name){
	kittensFunction();
	return [name,...kittens];
	}
function removeLastKitten(){
	kittensFunction();
	return kittens.slice(0,kittens.length-1);
	}
function removeFirstKitten(){
	kittensFunction();
	return kittens.slice(1,kittens.length);
	}
