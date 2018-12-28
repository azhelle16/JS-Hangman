/*
 #######################################################################
 #
 #  FUNCTION NAME : 
 #  AUTHOR        : 
 #  DATE          : 
 #  MODIFIED BY   : 
 #  REVISION DATE : 
 #  REVISION #    : 
 #  DESCRIPTION   : 
 #  PARAMETERS    : 
 #
 #######################################################################
*/

var gamePiece = {
	wordToGuess : "",
	wordSpace : "",
	totalWins : 0,
	totalLoss : 0,
	totalGames : 0,
	guessedLetters : [],
	startGame : false,
	wordBank : ["goodfellas","the game","jackie brown","boogie nights","the big lebowski","the player","the shawshank redemption","havana","stiff upper lips","ed wood", "forrest gump",
					"american beauty","being john malkovich","glengarry glen ross","the doors","magnolia","man on the moon","oscar","pretty woman","cape fear","the road to wellville","sleepers",
					"titanic","true lies","the grifters","pulp fiction","heavenly creatures","leaving las vegas","under suspicion","fargo","trainspotting","casino","the matrix",
					"great expectations","the remains of the day","absolute power","primal fear","the sixth sense","as good as it gets","guilty as sin","fight club","maverick","short cuts",
					"and the band played on","night falls on manhattan","donnie brasco","twelve monkeys","final analysis","barton fink","the mask","the marrying man","good will hunting","philadelphia",
					"damage","fear and loathing in las vegas","the full monty","braveheart","groundhog day","pacific heights","far and away","you or me","dead man walking","get shorty","playing by heart",
					"bowfinger","wilde","rounders","wag the dog","assassins","payback","double jeopardy","thursday","summer of sam","the mirror has two faces","dead alive","the birdcage","the specialist",
					"the jackal","live flesh","notting hill","the basketball diaries","a bronx tale","death becomes her","the crow","four rooms","misery","meet joe black","desperado","scent of a woman",
					"to die for","the truman show","dolores claiborne","falling down","reservoir dogs","amistad","natural born killers","in the name of the father","shining through",
					"the inner circle","true romance","a perfect murder","lolita","air america","white hunter black heart","the client","intersection","disclosure","the mask of zorro",
					"most wanted","sweet and lowdown","ronin","the trial","fanny and elvis","french kiss","the vanishing"],
	pickRandomWord : function() {

		/*
 		 #######################################################################
 		 #
		 #  FUNCTION NAME : pickRandomWord
		 #  AUTHOR        : Maricel Louise Sumulong
		 #  DATE          : December 18, 2018 PST
		 #  MODIFIED BY   : Maricel Louise Sumulong
		 #  REVISION DATE : December 27, 2018 PST
		 #  REVISION #    : 2
		 #  DESCRIPTION   : Selects random word in the list
		 #  PARAMETERS    : none
		 #
 		 #######################################################################
		*/

		var index = Math.floor(Math.random() * ((gamePiece.wordBank.length - 1) - 0) + 0);
		gamePiece.wordToGuess = gamePiece.wordBank[index];
		for (var i = 0; i < gamePiece.wordToGuess.length; i++) {
			if (gamePiece.wordToGuess[i] == " ") {
				gamePiece.wordSpace += " "
			} else {
				gamePiece.wordSpace += "-"	
		  	}
		}
		document.getElementById("guessWordHere").innerHTML = gamePiece.wordSpace;

	},
	listenToKeyStrokes : function(event) {

		/*
		 #######################################################################
		 #
		 #  FUNCTION NAME : listenToKeyStrokes
		 #  AUTHOR        : Maricel Louise Sumulong
		 #  DATE          : December 18, 2018 PST
		 #  MODIFIED BY   : Maricel Louise Sumulong
		 #  REVISION DATE : December 27, 2018 PST
		 #  REVISION #    : 4
		 #  DESCRIPTION   : Listens to user key inputs
		 #  PARAMETERS    : key code event
		 #
		 #######################################################################
		*/

		if (((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) && gamePiece.startGame == true) {

			var glet = String.fromCharCode(event.keyCode)
			var indexes = gamePiece.getAllIndexes(gamePiece.wordToGuess, glet)
			var tempArr = gamePiece.wordSpace.split("")
			if (indexes.length != 0) {
				for (var k = 0; k < indexes.length; k++) {
					tempArr[indexes[k]] = glet;
				}
				gamePiece.wordSpace = tempArr.join("");
				document.getElementById("guessWordHere").innerHTML = gamePiece.wordSpace;
			} else {
				if (gamePiece.guessedLetters.indexOf(glet) != -1) {
					document.getElementById("existsAudio").play();
					return false
				}
				gamePiece.guessedLetters.push(glet)
				document.getElementById("guessLettersHere").innerHTML = gamePiece.guessedLetters.join(" ")
				//update guess remaining values
				var grem = document.getElementById("gRem").innerHTML - 1;
				document.getElementById("gRem").innerHTML = grem;
		  	  }
		 
			//change color for guesses
			var guessRem = document.getElementById("gRem").innerHTML;
			var gr = document.getElementById("gRem")
			if (guessRem > 5  && guessRem < 10) {
				gr.style.color = "yellow";
			} else if (guessRem <= 5) {
				gr.style.color = "red";
		  	  }

			//check if there's still guess remaining
			if (document.getElementById("gRem").innerHTML == 0) {
				gamePiece.resetValues();
				gamePiece.totalLoss += 1;
				document.getElementById("totalLoss").innerHTML = gamePiece.totalLoss;
				document.getElementById("wrongAudio").play();
				gamePiece.pickRandomWord();
				gamePiece.totalGames += 1;
				document.getElementById("gamesPlayed").innerHTML = gamePiece.totalGames;
			}
			
		 	//check if word is already guessed
			var isGuessed = gamePiece.checkWordStatus(gamePiece.wordSpace);

			if (isGuessed) {
				gamePiece.totalWins += 1;
            	document.getElementById("totalWins").innerHTML = gamePiece.totalWins;
            	document.getElementById("correctAudio").play();
            	gamePiece.resetValues();
            	gamePiece.pickRandomWord();
            	gamePiece.totalGames += 1;
            	document.getElementById("gamesPlayed").innerHTML = gamePiece.totalGames;
			}
		
		} else if (event.keyCode == 13 && gamePiece.startGame == false) {
				
				var uname = document.getElementById("username").value;
				document.getElementById("welcomeLogo").classList.add("dispHide");
				document.getElementById("mainGame").classList.remove("dispHide");
				gamePiece.startGame = true;
				gamePiece.pickRandomWord();
				document.getElementById("pname").innerHTML = uname;
				var child = document.getElementById("welcomeAudio");
				child.parentNode.removeChild(child);
				document.getElementById("resetButton").onclick = function() {
					gamePiece.reset();
				}

	  	  } else {
				return false
	        }

	},
	getAllIndexes : function(arr, val) {

		/*
		 #######################################################################
		 #
		 #  FUNCTION NAME : getAllIndexes
		 #  AUTHOR        : 
		 #  DATE          : 
		 #  MODIFIED BY   : 
		 #  REVISION DATE : 
		 #  REVISION #    : 
		 #  DESCRIPTION   : returns array consisting of indexes where the given input occurs
		 #  PARAMETERS    : array, letter to look up
		 #
		 #######################################################################
		*/

   		var indexes = [], i = -1;
    	while ((i = arr.indexOf(val, i+1)) != -1){
        	indexes.push(i);
    	}
    	return indexes;
	
	},
	checkWordStatus : function() {

		/*
		 #######################################################################
		 #
		 #  FUNCTION NAME : checkWordStatus
		 #  AUTHOR        : Maricel Louise Sumulong
		 #  DATE          : December 18, 2018 PST
		 #  MODIFIED BY   : Maricel Louise Sumulong
		 #  REVISION DATE : December 21, 2018 PST
		 #  REVISION #    : 1 
		 #  DESCRIPTION   : checks whether the word is already guessed
		 #  PARAMETERS    : none
		 #
		 #######################################################################
		*/

		if (gamePiece.wordSpace == gamePiece.wordToGuess) {
			return 1
		} else {
			return 0
		  }

	},
	resetValues : function() {

		/*
		 #######################################################################
		 #
		 #  FUNCTION NAME : resetValues
		 #  AUTHOR        : Maricel Louise Sumulong
		 #  DATE          : December 18, 2018 PST
		 #  MODIFIED BY   : Maricel Louise Sumulong
		 #  REVISION DATE : December 25, 2018 PST
		 #  REVISION #    : 2
		 #  DESCRIPTION   : resets the values when the user guesses it or the remaining numbers are up
		 #  PARAMETERS    : none
		 #
		 #######################################################################
		*/

		gamePiece.wordSpace = "";
		document.getElementById("guessLettersHere").innerHTML = ""
		document.getElementById("gRem").innerHTML = 15;
		gamePiece.guessedLetters = [];
		document.getElementById("gRem").style.color = "green";

	},
	reset : function() {

		/*
		 #######################################################################
		 #
		 #  FUNCTION NAME : reset
		 #  AUTHOR        : Maricel Louise Sumulong
		 #  DATE          : December 18, 2018 PST
		 #  MODIFIED BY   : Maricel Louise Sumulong
		 #  REVISION DATE : December 25, 2018 PST
		 #  REVISION #    : 2
		 #  DESCRIPTION   : resets the whole game
		 #  PARAMETERS    : none
		 #
		 #######################################################################
		*/

		gamePiece.wordSpace = "";
		document.getElementById("guessLettersHere").innerHTML = ""
		document.getElementById("gRem").innerHTML = 15;
		gamePiece.guessedLetters = [];
		document.getElementById("totalWins").innerHTML = 0;
		document.getElementById("totalLoss").innerHTML = 0;
		document.getElementById("gamesPlayed").innerHTML = 0;
		gamePiece.pickRandomWord();
		document.getElementById("gRem").style.color = "green";
	
	}

}

window.onload = function () {
	document.getElementById("username").focus();
}

document.onkeypress = function() {
	gamePiece.listenToKeyStrokes(event);
}	

