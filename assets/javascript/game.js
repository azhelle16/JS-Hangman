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
	selectedCategory : "",
	wordBank : {"movies":["goodfellas","the game","jackie brown","boogie nights","the big lebowski","the player","the shawshank redemption","havana","stiff upper lips","ed wood", "forrest gump",
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
				"fruits":["melon","banana","honeydew","cantaloupe","watermelon","apple","acai","akee","apricot","avocado","bilberry","blackberry","blackcurrant","black sapote","blueberry","boysenberry",
				    "crab apples","currant","cherry","custard apple","chico","cloudberry","coconut","cranberry","cucumber","damson","date","dragonfruit","durian","elderberry","feijoa","fig","goji berry",
				    "gooseberry","grape","grapefruit","guava","honeyberry","huckleberry","jabuticaba","jackfruit","jambul","japanese plum","jostaberry","jujube","juniper berry","kiwano","kiwifruit",
				    "kumquat","lemon","lime","loquat","longan","lychee","mango","mangosteen","marionberry","miracle fruit","mulberry","nectarine","nance","olive","blood orange","clementine","mandarine",
				    "tangerine","papaya","passionfruit","peach","pear","persimmon","plantain","plum","pineapple","pineberry","plumcot","pomegranate","pomelo","quince","raspberry","rambutan","salak","satsuma",
				    "soursop","star apple","star fruit","strawberry","tamarillo","tamarind","ugli fruit","yuzu"],
				"atv":["the sopranos","the wire","breaking bad","mad men","seinfield","the simpsons","the twilight zone","saturday night live","all in the family","the daily show","freaks and geeks",
				    "game of thrones","late night with david letterman","the larry sanders show","the west wing","m*a*s*h","twin peaks","star trek","curb your enthusiasm","cheers","the office","louie","deadwood",
				    "friday night lights","veep","friends","arrested development","the x-files","sesame street","i love lucy","south park","my so-called life","orange is the new black","buffy the vampire slayer",
				    "bones","american horror stories","lost","stranger things","pretty little liars","gossip girl","cougar town","the shield","the honeymooners","law & order","nypd blue","baywatch","the americans",
				    "columbo","battlestar galactica","the rockford files","taxi","fargo","the colber report","the bob newhart show","the muppet show","six feet under","fawlty towers","roots","hill street blues",
				    "beavis and butt-head","your show of shows","sex and the city","the wonder years","chapelle's show","happy days","downtown abbey","the odd couple","the state","the ed sullivan show",
				    "roseanne","girls","golden girls","transparent","the ren & stimpy show","the walking dead","thirtysomething","in living color","the fugitive","dallas","the jeffersons",
				    "house of cards","the real world","good times","doctor who","party down","homeland","the dick van dyke show","broad city","american idol","jeopardy","lizzie mcguire","that's so raven",
				    "boy meets world","full house","desperate housewives","portlandia","the big bang theory","ghost whisperer","supernaturals","ncis","crime scene investigation","charmed","melrose place",
				    "andi mack","girl meets world"],
				"animals":["northern flicker","bowhead whale","rattlesnake","mockingbird","bear","lark bunting","sperm whale","gray fox","manatee","gopher tortoise","monk seal","appaloosa horse","white-tailed deer",
				    "northern cardinal","american bullfrog","american bison","horse","alligator","moose","diamondback terrapin","seven-spotted ladybug","brook trout","common loon","wood duck","eastern bluebird",
				    "mourning cloak","desert tortoise","desert bighorn sheep","red-spotted newt","european honey bee","roadrunner","beaver","eastern tiger swallowtail","northern black racer","eastern collared lizard",
				    "dungeness crab","ruffed grouse","rhode island red","loggerhead sea turtle","coyote","raccoon","nine-banded armadillo","rocky mountain elk","monarch butterfly","virginia big-eared bat","orca",
				    "black bear","badger","horned lizard"],
				"artists":["the beatles","madonna","elton john","elvis presley","mariah carey","stevie wonder","janet jackson","michael jackson","whitney houston","rihanna","the rolling stones","bee gees","usher",
					"chicago","the supremes","prince","daryl hall & john oates","rod stewart","olivia newton-john","drake","aretha franklin","marvin gaye","taylor swift","katy perry","phil collins","billy joel",
					"diana ross","the four seasons","the temptations","donna summer","the beach boys","lionel richie","bruno mars","neil diamond","the carpenters","the jacksons","connie francis","beyonce","brenda lee",
					"kenny rogers","barbra streisand","bryan adams","cher","george michael","the black eyed peas","pink","bobby vinton","john mellencamp","three dog night","huey lewis & the news","gloria estefan",
					"bon jovi","chubby checker","ray charles","foreigner","chris brown","kool & the gang","gladys knight & the pips","ricky nelson","duran duran","justin timberlake","commodores","eagles","lady gaga",
					"tlc","paul anka","barry manilow","dionne warwick","heart","nelly","the everly brothers","bobby darin","james brown","paula abdul","eminem","alicia keys","kelly clarkson","linda ronstadt","richard marx",
					"starship","destiny's child","kanye west","celine dion","adele","jay-z","the miracles","nicki minaj","bob seger","fleetwood mac","ariana grande","neil sedaka","justin beiber","demi lovato","bruce springsteen",
					"the pointer sisters","john denver","four tops","tony orlando & dawn","the weeknd","peabo bryson","lea salonga","miley cyrus","selena gomez","lea michele","queen","britney spears","christina aguilera",
					"jessica simpson","toni braxton","rascal flatts","lucy hale","drew seeley","dua lipa","pentatonix","charlie puth"],
				"scientists":["albert einstein","marie curie","isaac newton","galileo galilei","stephen hawking","charles darwin","nikola tesla","thomas edison","nicolaus copernicus","louis pasteur","michael faraday",
					"alexander graham bell","francis crick","rosalind franklin","aristotle","james watson","neil degrasse tyson","leonardo da vinci","max planck","johannes kepler","niels bohr","antoine lavoisier",
					"archimedes","gregor mendel","alexander fleming","james clerk maxwell","pierre curie","guglielmo marconi","richard feynman","edwin hubble","ernest rutherford","linus pauling","robert boyle","carl linnaeus",
					"dmitri mendeleev","alessandro volta","heinrich hertz","erwin schroedinger","rachel carson","tim berners lee","paul dirac","wilhelm roentgen","tycho brahe","ada lovelace","enrico fermi","william herschel",
					"robert hooke","andre-marie ampere","anaximander","luis alvarez","mary anning","aristarchus","amedeo avogadro","daniel bernoulli","robert bunsen","james chadwick","erwin chargaff","john dalton","rene descartes",
					"erathosthenes","benjamin franklin","william harvey","joseph henry","grace hopper","jack honner","james hutton","irene joliot-curie","michio kaku","florence nightingale","alfred nobel","hans christian oersted",
					"theodore schwann","thales of miletus","alfred wallace","james watt"],
				"sports":["cheerleading","competitive dancing","dancesport","gymnastics","aerobatics","cluster ballooning","hopper ballooning","gliding","parachuting","paragliding","paramotoring","ultralight aviation",
					"archery","badminton","biribol","bossaball","fistball","pickleball","sepak takraw","sipa","table tennis","tennis","throwball","volleyball","wallyball","basketball","cestoball","korfball","baseball",
					"softball","cricket","skateboarding","scootering","skysurfing","streetluge","snowboarding","surfing","wakeboarding","paddleboarding","dodgeball","skiing","rock climbing","cycling","roller hockey","wrestling",
					"judo","boxing","muay thai","taekwondo","fencing","eskrima","billiards","rodeo","jousting","horse polo","football","golf","soccer","swimming","rugby","figure skating","ice hockey","target shooting",
					"raquetball","squash"]},
	pickRandomWord : function() {

		/*
 		 #######################################################################
 		 #
		 #  FUNCTION NAME : pickRandomWord
		 #  AUTHOR        : Maricel Louise Sumulong
		 #  DATE          : December 18, 2018 PST
		 #  MODIFIED BY   : Maricel Louise Sumulong
		 #  REVISION DATE : January 05, 2019 PST
		 #  REVISION #    : 4
		 #  DESCRIPTION   : Selects random word in the list
		 #  PARAMETERS    : category name
		 #
 		 #######################################################################
		*/

		var categ = "";

		switch (gamePiece.selectedCategory) {
			case "90's Movies": categ = "movies"; break;
			case "American TV Shows": categ = "atv"; break;
			case "Music Artists": categ = "artists"; break;
			default: categ = gamePiece.selectedCategory.toLowerCase();
		}

		var index = Math.floor(Math.random() * ((gamePiece.wordBank[categ].length - 1) - 0) + 0);
		gamePiece.wordToGuess = gamePiece.wordBank[categ][index];
		gamePiece.wordSpace = gamePiece.wordToGuess.replace(/[a-z]/g,"_")
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
		 #  REVISION DATE : January 05, 2019 PST
		 #  REVISION #    : 8
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
				if (gamePiece.guessedLetters.includes(glet)) {
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
				gamePiece.totalLoss += 1;
				document.getElementById("totalLoss").innerHTML = gamePiece.totalLoss;
				document.getElementById("wrongAudio").play();
				var final = document.getElementById("guessWordHere");
				final.style.color = "red";
				final.innerHTML = gamePiece.wordToGuess.toUpperCase();
				setTimeout(function(){
            		gamePiece.resetValues();
            		final.style.color = "#00ff83";
            		gamePiece.pickRandomWord();
            	}, 1500)
				gamePiece.totalGames += 1;
				document.getElementById("gamesPlayed").innerHTML = gamePiece.totalGames;
			}
			
		 	//check if word is already guessed
			var isGuessed = gamePiece.checkWordStatus(gamePiece.wordSpace);

			if (isGuessed) {
				gamePiece.totalWins += 1;
            	document.getElementById("totalWins").innerHTML = gamePiece.totalWins;
            	document.getElementById("correctAudio").play();
            	gamePiece.totalGames += 1;
            	document.getElementById("gamesPlayed").innerHTML = gamePiece.totalGames;
            	setTimeout(function(){
            		gamePiece.resetValues();
            		gamePiece.pickRandomWord();
            	}, 500)
			}
		
		} else if (event.keyCode == 13 && gamePiece.startGame == false) {
				
				document.getElementById("welcomeLogo").classList.add("dispHide");
				document.getElementById("categories").classList.remove("dispHide");
				gamePiece.startGame = true;
				var buttons = document.getElementsByClassName("buttonCat")
				for (var x = 0; x < buttons.length; x++) {
					buttons[x].onclick = function() {
						gamePiece.selectedCategory = this.value;
						gamePiece.setGameBoard();
					}
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
		 #  REVISION DATE : January 05, 2019 PST
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
		gamePiece.totalLoss = 0;
		gamePiece.totalWins = 0;
		gamePiece.totalGames = 0;
	
	},
	setGameBoard : function() {

		/*
 		 #######################################################################
		 #
		 #  FUNCTION NAME : setGameBoard
		 #  AUTHOR        : Maricel Louise Sumulong
		 #  DATE          : January 05, 2019 PST
		 #  MODIFIED BY   : Maricel Louise Sumulong
		 #  REVISION DATE : January 10, 2019 PST
		 #  REVISION #    : 2
		 #  DESCRIPTION   : to set the game board with the selected category
		 #  PARAMETERS    : none
		 #
		 #######################################################################
		*/

		document.getElementById("mainContainer").classList.remove("dispHide");
		document.getElementById("categories").classList.add("dispHide");

		var pics= "";

		switch (gamePiece.selectedCategory) {
			case "90's Movies": pics = "movies"; break;
			case "American TV Shows": pics = "atv2"; break;
			case "Music Artists": pics = "artists"; break;
			default: pics = gamePiece.selectedCategory.toLowerCase();
		}

		document.getElementById("categPic").setAttribute("src","./assets/images/"+pics+".png")
		gamePiece.pickRandomWord();
		var uname = document.getElementById("username").value;
		document.getElementById("pname").innerHTML = uname;
		var child = document.getElementById("welcomeAudio");
		child.parentNode.removeChild(child);
		document.getElementById("resetButton").onclick = function() {
			gamePiece.reset();
		}
		document.getElementById("changeCatButton").onclick = function() {
			gamePiece.changeCatButton();
		}
		document.getElementById("exitButton").onclick = function() {
			gamePiece.exitButton();
		}
		document.body.style.background = 'url("./assets/images/main3.jpg")';
		var iwidth = window.innerWidth
		// if (window.innerWidth <= 640) {
			// document.body.style.backgroundSize = '640px 768px';
		// } else if (window.innerWidth >= 641 && window.innerWidth <= 768) {
			// document.body.style.backgroundSize = '768px 768px';
		if (window.innerWidth < 1024) {
			document.body.style.backgroundSize = window.innerWidth+"px 768px"	
		  } else {
				document.body.style.backgroundSize = 'cover';
				document.body.style.backgroundRepeat = "no-repeat";
		    }

	},
	changeCatButton : function() {

		/*
 		 #######################################################################
		 #
		 #  FUNCTION NAME : changeCatButton
		 #  AUTHOR        : Maricel Louise Sumulong
		 #  DATE          : January 05, 2018
		 #  MODIFIED BY   : 
		 #  REVISION DATE : 
		 #  REVISION #    : 
		 #  DESCRIPTION   : allows the user to change category
		 #  PARAMETERS    : none
		 #
		 #######################################################################
		*/

		document.getElementById("guessLettersHere").innerHTML = ""
		document.getElementById("gRem").innerHTML = 15;
		gamePiece.guessedLetters = [];
		document.getElementById("categories").classList.remove("dispHide");
		document.getElementById("mainContainer").classList.add("dispHide");

	},
	exitButton : function() {

		/*
 		 #######################################################################
		 #
		 #  FUNCTION NAME : exitButton
		 #  AUTHOR        : Maricel Louise Sumulong
		 #  DATE          : January 05, 2019 PST
		 #  MODIFIED BY   : Maricel Louise Sumulong
		 #  REVISION DATE : January 10, 2019 PST
		 #  REVISION #    : 1
		 #  DESCRIPTION   : goes back to the main page
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
		document.getElementById("gRem").style.color = "green";
		document.getElementById("categories").classList.add("dispHide");
		document.getElementById("mainContainer").classList.add("dispHide");
		document.getElementById("welcomeLogo").classList.remove("dispHide")
		var toEmbed = document.createElement("embed")
		document.querySelector('body').appendChild(toEmbed)
		document.querySelector('embed').setAttribute("id","welcomeAudio");
		document.querySelector('embed').setAttribute("src","./assets/images/sounds/electronic.mp3")
		document.querySelector('embed').setAttribute("type","audio/mpeg")
		document.querySelector('embed').setAttribute("autoplay","true")
		document.querySelector('embed').setAttribute("hidden","true")
		document.querySelector('embed').setAttribute("loop","true")
		document.getElementById("username").value = "";
		document.getElementById("username").focus();
		document.body.style.background = 'url("./assets/images/main.jpg")';
		if (window.innerWidth < 1024) {
			document.body.style.backgroundSize = window.innerWidth+"px 768px"	
		  } else {
				document.body.style.backgroundSize = 'cover';
				document.body.style.backgroundRepeat = "no-repeat";
		    }
		gamePiece.startGame = false;
		gamePiece.totalLoss = 0;
		gamePiece.totalWins = 0;
		gamePiece.totalGames = 0;

	}

}

window.onload = function () {
	document.getElementById("username").focus();
}

document.onkeypress = function() {
	gamePiece.listenToKeyStrokes(event);
}

window.addEventListener("resize", function() {
	
	if (window.innerWidth < 1024) {
		document.body.style.backgroundSize = window.innerWidth+"px 768px"	
	} else {
		document.body.style.backgroundSize = 'cover';
		document.body.style.backgroundRepeat = "no-repeat";
	  }

})	

