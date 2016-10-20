const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(el){
  kittens.push(el);
  return kittens;
};

destructivelyAppendKitten('Ralph');

function destructivelyPrependKitten(el){
  kittens.unshift(el);
  return kittens;
};

destructivelyPrependKitten('Bob');

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
  };

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
  };

  var kittens = ['Milo', 'Otis', 'Garfield']

  function appendKitten(name){
  	return [...kittens, name];
  }


  var kittens = ['Milo', 'Otis', 'Garfield']

  function prependKitten(name){
    return [name, ...kittens];
  }



  var kittens = ['Milo', 'Otis', 'Garfield']

  function removeLastKitten() {
    var kittensTwo = kittens.slice(0, kittens.length - 1);
    return kittensTwo
    };


    var kittens = ['Milo', 'Otis', 'Garfield']

    function removeFirstKitten() {
      var kittensTwo = kittens.slice(1);
      return kittensTwo
      };
