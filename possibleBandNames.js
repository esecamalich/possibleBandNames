function possibleBandNames(array) {

    // Define two original band names
    let firstBandName = 'Goo Goo Dolls';
    let secondBandName = 'Foo Fighters';
    console.log('The given band names are "' + firstBandName + '" and "' + secondBandName + '"');

    // Turn both names into an array
    let firstBandArray = firstBandName.split(' ');
    console.log('First Band: ' + firstBandArray);

    let secondBandArray = secondBandName.split(' ');
    console.log('Second Band: ' + secondBandArray);

    // Give each band's total amount of words in their name
    let firstBandWordLength = firstBandArray.length;
    console.log('Total words in First Band\'s name: ' + firstBandWordLength)

    let secondBandWordLength = secondBandArray.length;
    console.log('Total words in Second Band\'s name: ' + secondBandWordLength)

    // Concatenate both bands name's into a single array.
    let combinedNames = [].concat(firstBandArray, secondBandArray);
    console.log(combinedNames)

    //combinedNames.forEach(bandNameLength);

    // Shuffle words in combinedNames
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
        
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        
        return array;
    }

    // Generate random number for slicing combinedNames
    const rndInt = Math.floor(Math.random() * 5) + 2

    shuffle(combinedNames)
    
    console.log(combinedNames.slice(0,rndInt))

    // Turn new combinedNames into a single string
    let newPossibleBandName = combinedNames.join(" ")
    console.log(newPossibleBandName)

}

possibleBandNames();


// TODO: Set the amount of 


/*function count(array) {

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