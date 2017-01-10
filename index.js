const app = "I don't do much."

function Arrays(){
    var kittens = ["Milo", "Otis", "Garfield"];
    return kittens;
  }
   Arrays();

   function kittens(){
      var kittens = ["Milo", "Otis", "Garfield"];
      return kittens;
    }
       kittens();

        var kittens = ["Milo", "Otis", "Garfield"];
       function destructivelyAppendKitten(name){
       kittens.push(name);
       return kittens;
     }
       destructivelyAppendKitten("Ralph");

   function destructivelyPrependKitten(name){
       kittens.unshift(name);
}
     destructivelyPrependKitten("Bob");

     function destructivelyRemoveLastKitten(){
     kittens.pop();
 }

 function destructivelyRemoveFirstKitten(){
      kittens.shift();
     }

     function appendKitten(name){
         var kittens = ["Milo", "Otis", "Garfield"];
         kittens = [...kittens, "Broom"]
         return kittens;
       }
         appendKitten();

  function prependKitten(name){
   var kittens = ["Milo", "Otis", "Garfield"];
   kittens = ["Arnold",...kittens]
   return kittens;
 }
   prependKitten();

 function removeLastKitten(){
 var kittens = ["Milo", "Otis", "Garfield"];
    kittens.pop()
    return kittens;
}
removeLastKitten()

function removeFirstKitten(){
     var kittens = ["Milo", "Otis", "Garfield"];
     kittens = kittens.slice(1)
     return kittens;
 }
    removeFirstKitten();
