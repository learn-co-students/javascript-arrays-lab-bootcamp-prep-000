const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
 kittens.push(name)
 return kittens
}

function destructivelyPrependKitten(name)

{
 kittens.unshift(name);
 return kittens
}


function prependKitten(name)
{
 var string=kittens.slice();
 
 string.unshift(name)
 return string;
}



function destructivelyRemoveLastKitten()
{
 
 kittens.pop()
 return kittens
}

function destructivelyRemoveFirstKitten()

{
 
 kittens.shift()
 return kittens
}

function appendKitten(name)

{
  
 var string=kittens.slice();
 string.push(name);
 return string;
}

function removeFirstKitten()

{
  var string=kittens.slice()
  string.shift();
 
   return string;
}
function removeLastKitten()

{
  var string=kittens.slice()
  string.pop();
 
   return string;
}

function removeLastKitten()

{
  var string=kittens.slice()
  string.pop();
 
   return string;
}

