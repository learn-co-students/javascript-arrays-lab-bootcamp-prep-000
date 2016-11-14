const app = "I don't do much."

function destructivelyAppendKitten(name){
var kitten =  [ 'Milo', 'Otis', 'Garfield' ]
kittens .push  ('Ralph')
return kitten ;

}
function  destructivelyPrependKitten(name) {
var kitten =  [ 'Milo', 'Otis', 'Garfield' ]
kittens .unshift ("Bob")
return  kitten

}
function destructivelyRemoveLastKitten(){
var kitten = [ 'Milo', 'Otis', 'Garfield' ]
kittens .pop("Garfield")
return kitten
}

function destructivelyRemoveFirstKitten(){
var kitten = [ 'Milo', 'Otis', 'Garfield' ]
kittens.shift('Milo')
return kitten

}
function appendKitten(name) {
var kitten = ['Milo' ,'Otis', 'Garfield']
kitten = [...kitten,'Broom']
return kitten

}
 function  prependKitten(name) {
var kitten = ["Milo", "Otis", "Garfield"]
kitten = ['Arnold',...kitten]
return kitten

   }

function removeLastKitten() {
var kitten =["Milo", "Otis", "Garfield"]
kitten = kitten.slice(0,kitten.length -1)
return kitten
 }

 function removeFirstKitten() {
 var kitten = ["Milo", "Otis", "Garfield"]
kitten= kitten.slice(1)
return kitten
 }
