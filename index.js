"use strict";
const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var kitties = [...kittens, name];
  return kitties;
}

function prependKitten(name) {
  var kitties = [name, ...kittens];
  return kitties;
}

function removeLastKitten() {
  var kitties = kittens.slice(0,-1);
  return kitties;
}

function removeFirstKitten() {
  var kitties = kittens.slice(1);
  return kitties;
}
