
var kittens = ['Milo','Otis','Garfield'] //define your array here
function destructivelyAppendKitten(name) {kittens.push(name)}
function destructivelyPrependKitten(name) {kittens.unshift(name)}
function destructivelyRemoveLastKitten(name) {kittens.pop(name)}
function destructivelyRemoveFirstKitten(name) {kittens.shift(name)}
function appendKitten(Bill){return kittens.concat(Bill)}

function prependKitten(name) {return [name, ...kittens]}

function removeLastKitten() {return kittens.slice(0,kittens.length-1)} 

function removeFirstKitten() {return kittens.slice(1)}
