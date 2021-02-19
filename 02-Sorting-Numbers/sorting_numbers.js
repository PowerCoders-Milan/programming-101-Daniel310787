//insert your pseudocode below
/*
1. aloud insertion fo digits---set up a variable 
2. sort them in order then 
3. consolelog--print them
*/

//insert your code below

var digit;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


digit = [5, 9, 8];
window.alert(digit.slice().sort(listsGetSortCompare("NUMERIC", 1)));