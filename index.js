const app = "I don't do much."                              //I have no idea why this was included in the intial template.

function destructivelyAppendKitten(name){
  return kittens.push(name);                               //destructively add name to the end of array kittens
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);                            //add add name to the start of array kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop();                                            //remove last element from kittens
  return kittens;                                           //return contents of kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();                                          //remove the first element from kittens
  return kittens;                                           //return the contents of kittens
}

function appendKitten(name){
  return [...kittens, name];                                //adds name to end of kittens without changing kittens
}

function prependKitten(name){
  return [name, ...kittens];                                //adds name to the beginning of kittens w/o changing kittens
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);               //slice off the end value of kittens and report this array w/o changing kittens
}

function removeFirstKitten(){
  return kittens.slice(1, kittens.length);                    //slice off the first value of kittens and report this array w/o changing kittens
}
