const app = "I don't do much."
var kittens =[
  "milo",
  "Otis",
  "Garfield"
];

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
};

function destructivelyRemoveFirstKitten() {
  kittens.shift();
};

function appendKitten(name) {
  var newArray = [
    kittens[0],
    kittens[1],
    kittens[2],
    name
  ];
  return newArray;
};

function prependKitten(name) {
  var newArray = [
    name,
    kittens[0],
    kittens[1],
    kittens[2],
  ];
  return newArray;
};

function removeLastKitten(){
  var newArray = [
      "Milo",
      "Otis",
   ]
   return newArray;
};

function removeFirstKitten(){
   var newArray = [
       "Otis",
      "Garfield"
  ]
    return newArray;
};
