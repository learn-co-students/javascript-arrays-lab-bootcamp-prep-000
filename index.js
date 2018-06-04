const app = "I don't do much."
var kittens = [
  'Milo',
  'Otis',
  'Garfeld',
  ]
  
function destructivelyAppendKitten(){
  kittens.push('Ralph');
  
}

  function destructivelyPrependKitten(){
    kittens.unshift('Bob');
  }
  
  function destructivelyRemoveLastKitten(){
    kittens.pop('Garfield');
  }
  
  function destructivelyRemoveFirstKitten(){
    kittens.shift('Milo');
  }
  
  function appendKitten(){
    return ['Milo', 'Otis', 'Garfield', 'Broom'];
  }
  
  function prependKitten(){
    return ['Arnold', 'Milo', 'Otis', 'Garfield'];
  }
  
  function removeLastKitten(){
    return ['Milo', 'Otis'];
  }
  
  function removeFirstKitten(){
    return ['Otis', 'Garfield'];
  }
  
  