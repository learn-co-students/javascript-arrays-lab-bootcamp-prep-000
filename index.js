var kittens= ['Milo', 'Otis', 'Garfield'];

//Test 1: Destructively Append 'Ralph'

function destructivelyAppendKitten(){
  kittens.push('Ralph');
return kittens;
}


//Test 2: Destructively Prepend 'Bob'

function destructivelyPrependKitten(){
   kittens.unshift('Bob');
   return kittens;
}


//Test 3: Destructively remove last Kitten

function destructivelyRemoveLastKitten(){
  kittens.pop();
return kittens;
}


//Test 4: Destructively remove first Kitten

function destructivelyRemoveFirstKitten(){
    kittens.shift([0]);
return kittens;
}


//Test 5: Append Kitten 'Broom'

function appendKitten(){
  return [...kittens, 'Broom'];
}
  

//Test 6: Prepend Kitten 'Arnold'

function prependKitten(){
  return ['Arnold',...kittens];
}


//Test 7: Remove the last Kitten

function removeLastKitten(){
  return kittens.slice(0,2);
}


//Test 8: Remove the first Kitten

function removeFirstKitten(){
return kittens.slice(1,3);
}

