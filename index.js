const app = "I don't do much."
<<<<<<< HEAD
/*function kittens(){
  
  var kittens = ["Milo","Otis","Garfield"]
  return kittens;
  }*/
   function destructivelyAppendKitten(name){
     kittens.push(name);
     return kittens;
  }
  function destructivelyPrependKitten(name){
    kittens.unshift(name);
    return kittens;
  }
  function destructivelyRemoveLastKitten(){
    kittens.pop();
    return kittens;
  }
  function destructivelyRemoveFirstKitten(){
    kittens = kittens.slice(1);
    return kittens;
  }
  function appendKitten(name){
    const newkittens = [...kittens, name];
    return newkittens;
  }
  function prependKitten(name){
    const nkittens = [name, ...kittens];
    return nkittens;
  }
  function removeLastKitten(){
    const kit = kittens.slice(0,kittens.length-1);
    return kit;
    
  }
  function removeFirstKitten(){
    const firstkittens = kittens.slice(1);
    return firstkittens;
  }
  
=======
function (){
  var kitten
}
function destructivelyAppendKitten(name){
  
}
>>>>>>> b79d965e3ba0a9fff7dd3ea92ba63082b03cb1c1
