// Define two original band names
let firstBandName = 'Goo Goo Dolls';
let secondBandName = 'Foo Fighters';
console.log('The chosen band names are "' + firstBandName + '" and "' + secondBandName + '"');

// Turn both names into an array
let firstBandArray = firstBandName.split(' ');
console.log('First Band: ' + firstBandArray);


let secondBandArray = secondBandName.split(' ');
console.log('Second Band: ' + secondBandArray);

// Give each band's total amount of words in their name
let firstBandWordLength = firstBandArray.length;
console.log('Total words in First Band\'s name: ' + firstBandWordLength)

let secondBandWordLength = secondBandArray.length;
console.log('Total words in irst Band\'s name: ' + secondBandWordLength)


// Concatenate both bands name's into a single array.
/*let combinedNames = [].concat(firstBandArray, secondBandArray);
console.log(combinedNames)

combinedNames.forEach(bandNameLength);

function count(array) {

    var c = 0;
    for(i in array) {
        if(array[i] != undefined) {
            c++
        }
    }

    return c;

}  

var total = count(array);
console.log(total)
*/


function bandNameLength(firstBandArray, index) {
    console.log(firstBandArray.length)
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
/*function shuffleArray(combinedNames) {
    for (var i = combinedNames; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = combinedNames[i];
        combinedNames[i] = combinedNames[j];
        combinedNames[j] = temp;
    }
    console.log(i)
}

shuffleArray()*/