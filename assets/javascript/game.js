var letters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z" ];
//generate random letter


//set variables
var guesses = 10;
var wins = 0;
var losses = 0;

document.onkeyup = function(event) {

    var userGuess = event.key;

    var letter = letters[Math.floor(Math.random() * letters.length)];

    if (userGuess === letter) {
        wins++;
    } else {
        guesses--;
    } if(guesses < 1) {
        losses++
    } 
    

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses Left: " + guesses;


}
