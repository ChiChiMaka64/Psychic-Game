
var wins =0;
        var loses=0;
        var guessesLeft= 10;
        var totalGuessesSoFar=0;

    

    var ComputerChoices=[ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w", "x", "y", "z"];
    var ComputerLetter=ComputerChoices[Math.floor(Math.random() * ComputerChoices.length)];
    console.log(ComputerLetter);
    document.onkeyup = function(event) {
       var UserGuess = event.key;
       var textnode = document.createTextNode(UserGuess);
       document.getElementById("totalGuessesSoFar").appendChild(textnode);
        if (guessesLeft === 0) {
            alert ("No More Guesses!");
            loses++;
            location.reload()
        }
        
        guessesLeft--; 
        if (UserGuess===ComputerLetter) {
            wins++;
            location.reload()
        }
       
        
         
        document.getElementById("wins").textContent="Wins: " + wins;
        document.getElementById("loses").textContent="Losses: " + loses;
        document.getElementById("guessesLeft").textContent="Guesses Left: " + guessesLeft;
       
        location.reload();
    };
       