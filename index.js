const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = function(){
 kittens.push('Ralph');
return kittens;
}

var destructivelyPrependKitten = function(){
 kittens.unshift("Bob");
return kittens;
}

var destructivelyRemoveLastKitten = function(){
 kittens.pop();
return kittens;
}

var destructivelyRemoveFirstKitten = function(){
 kittens.shift();
return kittens;
}

var appendKitten = function(){

var kitten = [...kittens, 'Broom']
return kitten;
};

var prependKitten = function(){

var kitten = ["Arnold",...kittens]
return kitten;
};

var removeLastKitten = function(){

var kitten = kittens.slice(0,2)
return kitten;
};

var removeFirstKitten = function(){

var kitten = kittens.slice(1)
return kitten;
};
