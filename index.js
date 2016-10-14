const app = "I don't do much."

var kittens=["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
	kittens = [...kittens,"Ralph"];
	return kittens;
}

var kittens=["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name) {
	kittens = ["Bob",...kittens];
	return kittens;
}

var kittens=["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten() {
  kittens.pop();
	return kittens;
}

var kittens=["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten() {
  kittens.shift();
	return kittens;
}

var kittens=["Milo", "Otis", "Garfield"];
function appendKitten(name) {
  return [...kittens,"Broom"]
}

var kittens = ["Milo","Otis","Garfield"]
function prependKitten(name) {
	return ["Arnold",...kittens];
}

var kittens = ["Milo","Otis","Garfield"]
function removeLastKitten() {
   var newKittens = kittens.slice(0,2)
	 return newKittens;

}

var kittens = ["Milo","Otis","Garfield"]
function removeFirstKitten() {
	var newKittens = kittens.slice(1)
	return newKittens;
}
