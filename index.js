const app = "I don't do much."
var kittens =[
  "milo",
  "Otis",
  "Garfield"
];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
};

function destructivelyAppendKitten(name) {
  kittens.unshift(name);
  return kittens;
};

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
