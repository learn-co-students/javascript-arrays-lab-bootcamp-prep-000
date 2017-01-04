var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {kittens.push(name); return kittens;}

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(name) {kittens.unshift(name); return kittens;}

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten() {kittens.pop(); return kittens;}

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten() {kittens.shift(); return kittens;}

var kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(name){return [...kittens, name];}

var kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(name){return [name, ...kittens];}

var kittens = ['Milo', 'Otis', 'Garfield'];
function removeLastKitten(){var different = kittens.slice(0,2);return different;}

var kittens = ['Milo', 'Otis', 'Garfield'];
function removeFirstKitten(){var different = kittens.slice(1);return different;}
