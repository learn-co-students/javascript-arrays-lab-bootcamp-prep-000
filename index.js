const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
	var nArray = [];
	var i = 0;
	while (i < kittens.length){
		nArray.push(kittens[i]);
		i += 1;
	}

	nArray.push(name);
	return nArray;
}

function prependKitten(name){
  var moreKittens = [name,...kittens];
  return moreKittens;
}

function removeLastKitten(){
	var nArray = []
	var i = 0
	while (i < kittens.length){
		nArray.push(kittens[i])
		i += 1
	}

	nArray.pop();
	return nArray;
}

function removeFirstKitten(){
  var nArray = [];
  var i = 0;
  while (i < kittens.length){
    nArray.push(kittens[i]);
    i += 1;
  }
  nArray.shift();
  return nArray;
}
