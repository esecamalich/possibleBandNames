// Define two original band names
let firstBandName = 'Goo Goo Dolls';
let secondBandName = 'Foo Fighters';
console.log('The chosen band names are ' + firstBandName + ' and ' + secondBandName);

// Turn both names into an array
let firstBandArray = firstBandName.split(' ');
console.log('First Band: ' + firstBandArray);

let secondBandArray = secondBandName.split(' ');
console.log('Second Band: ' + secondBandArray);


// Concatenate both bands name's into a single array.
let combinedNames = [].concat(firstBandArray, secondBandArray);
console.log(combinedNames);