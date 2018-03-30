var letters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z" ];



//set variables
var guesses = 10;
var wins = 0;
var losses = 0;
var wrongGuesses = [];


//game starts with push of key
document.onkeyup = function(event) {
    //generate random letter
    var letter = letters[Math.floor(Math.random() * letters.length)];
    // takes user's guess
    var userGuess = event.key;
    wrongGuesses.push(userGuess);

    if (userGuess === letter) {
        wins++;
    } else {
        guesses--;
    } if(guesses === 0) {
        losses++;
        guesses=10;
        wrongGuesses = [];
    } 
    
    
    
    //show the values in HTML
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;
    document.getElementById("used").innerHTML = "Your guesses so far: " + wrongGuesses.join(", ");


}
