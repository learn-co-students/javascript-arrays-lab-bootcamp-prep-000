var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten (element){
  kittens.push(element);
  
  }
  
  function destructivelyPrependKitten (element){
  kittens.unshift(element);
  
  }
  
  function destructivelyRemoveFirstKitten(){
    kittens.shift();
      }
      
  function destructivelyRemoveLastKitten(){  
    kittens.pop();
  }
  
  function appendKitten(element){
    var temparray=[element];
    var newarray=kittens.concat(temparray);
      return (newarray);
  }
  
  function prependKitten(element){
  var temparray=[element];
  var newarray=temparray.concat(kittens);
  return (newarray);
  }
  
  
  function removeLastKitten(){
  var newarray=[];
  newarray=kittens;
  newarray=newarray.slice(0, length-1);
  return (newarray);
    
  }
  
  function removeFirstKitten (){
    var newarray=[];
    newarray=kittens.slice(1);
        return (newarray);
  }
  
  
  
  