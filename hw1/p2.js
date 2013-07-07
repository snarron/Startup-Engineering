#!/usr/bin/env node

function checkPrime(n) {
  var i = 2;
  if (n == 2) {return true;}
  while (i <= n/2) {
    if (n % i == 0) {
      //console.log(n%i);
      //console.log(i, n);
      return false;
    }
    i++;
  }
  return true;
  console.log(i);
};

function printPrime(n) {
  var returnList = new Array();
  var i = 2;
  while (returnList.length < n) {
    if (checkPrime(i) == true) {
      //console.log(i);
      returnList.push(i);
    }
    i++;
    //console.log(returnList.length, i);
  }
  return returnList
};

var fs = require("fs");
var outfile = "p2.txt";
var numLimit = 100;
var primeList = new Array();
primeList = printPrime(numLimit);
var out = printPrime(numLimit).toString();
fs.writeFileSync(outfile, out);
