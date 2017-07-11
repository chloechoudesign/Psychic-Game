var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var winCounter = 0;
var lossCounter = 0;
var guessesRemain = 9;
var guessesSoFar = [];
var userGuess = null;

var computerChoices = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log('The computer choose :' + computerChoices);


document.onkeypress = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  
    if(userGuess === computerChoices) {
        winCounter++;
        guessesRemain = 9;
        guessesSoFar = [];
        computerChoices = alphabet[Math.floor(Math.random() * alphabet.length)];
        alert('Whoo! You got it!')
        console.log(computerChoices);
    } else {
        guessesSoFar[guessesSoFar.length] = userGuess;
        guessesRemain--;
    }

    if(guessesRemain === 0){
        lossCounter++;
        guessesRemain = 9;
        guessesSoFar = [];
        computerChoices = alphabet[Math.floor(Math.random() * alphabet.length)];
        alert('So close! Try again?')
        console.log(computerChoices);
    }

    document.getElementById('wins').innerHTML = winCounter;
    document.getElementById('losses').innerHTML = lossCounter;
    document.getElementById('guesses-remain').innerHTML = guessesRemain;
    document.getElementById('guesses-sofar').innerHTML = guessesSoFar;
};


