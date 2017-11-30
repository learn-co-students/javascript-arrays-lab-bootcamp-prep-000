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


function appendKitten(name) {

var kittens1 = kittens;

kittens1 = [...kittens1, name];

return kittens1;



}


function prependKitten(name)
{
  var kittens1 = kittens;

  kittens1 = [ name,...kittens1];

  return kittens1;


}

function removeFirstKitten() {
 var kittens1 = kittens;

  kittens1 = kittens.slice(1);

  return kittens1;
}

function removeLastKitten() {
 var kittens1 = kittens;

  kittens1 = kittens.slice(0,-1);

  return kittens1;
}
