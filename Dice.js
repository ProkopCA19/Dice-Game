
function runGame() {
	
	console.clear();
	
	for( let i=0; i<=1; i++){
		if(i===0){
			chooseCharacter();
		}
		else{
			chooseOpponent();
		}
		chooseWeapon(i);
		chooseAttackMethod(i); 

	}

	
	let characterHealth = health();
	let opponentHealth = health();

	
	displayHealth(0, characterHealth, opponentHealth);


	let fightNumber=1
	while (characterHealth > 0 && opponentHealth > 0) {
		opponentHealth -= damageDone();

		if (opponentHealth <= 0) {
			opponentHealth = 0;			
			displayHealth(fightNumber, characterHealth, opponentHealth);
			break;
		}

		characterHealth -= damageDone();
		
		if (characterHealth <= 0) {
			characterHealth = 0;			
		}
	
		displayHealth(fightNumber, characterHealth, opponentHealth);

		fightNumber++;
	}		

	
	displayResults(characterHealth, opponentHealth)
}










function chooseCharacter() {

	let characterArray=["Jason", "Elf", "Fairy", "Troll", "Knight", "Mermaid", "Ninja"];
	let sides = 6;
	let roll1 = rollDice(sides);
	let result = characterArray[roll1];

	console.log("Your character is a: " + result);

}


function chooseWeapon(n) {
 	let sides=20;
 	let result=rollDice(sides);
 	let weapon;
 	if(result >= 18 ){
 		weapon="Sword";
 	}
 	else if(result < 18  && result > 15){
 		weapon="Axe";
 	}
 	else if(result < 15 && result > 12){
 		weapon="Magic wand";
 	}
 	else if(result < 12 && result > 9){
 		weapon="Hammer";
 	}
 	else if(result < 9 && result > 6){
	 		weapon="Chainsaw";
 	}
 	else if(result < 6 && result > 3){
 		weapon="Boomerang"
 	}
 	else{
 		weapon="Grenade"
 	}

	switch(n) {
		case 0:
			console.log("Your weapon is a: " + weapon);
			break;
		case 1:
			console.log("Your opponent's weapon is a: " + weapon);
		break;
	}

}	

function chooseOpponent() {
 	let sides=12;
 	let result=rollDice(sides);
 	let opponent;

	switch(result) {
		case 1:
		case 3:
		case 7:
		opponent= "Dragon"
		break;

		case 2:
		case 4:
		case 10:
		opponent= "Vampire"
		break;

		case 5:
		case 9:
		case 12:
		opponent="Orc"
		break;

		case 6:
		case 8:
		case 11:
		opponent="Werewolf"
		break;
	}

 		console.log("Your opponent is a: " + opponent);
}


function chooseAttackMethod(n){
 	let sides=8;
 	let result=rollDice(sides);
 	let attack;

 	switch(result) {

 		case 1:
 		attack= "Punching";
 		break;

 		case 2:
 		attack="Kicking";
 		break;

 		case 3:
 		attack="Biting";
 		break;

 		case 4:
 		attack="using a laserbeam";
 		break;

 		case 5:
 		attack="Poking";
 		break;

 		case 6:
 		attack="Slapping";
 		break;

 		case 7:
 		attack="Scratching";
 		break;

 		case 8:
 		attack="Throwing";
 		break;

 	}

	switch(n) {
		case 0:
			console.log("You attacked by: " + attack);
			break;
		case 1:
			console.log("Your opponent attacked by: " + attack);
		break;
	}
}


function health() {
	let sides=10;
	let result=rollDice(sides);
	return result
}

function damageDone() {
	let sides=4
	let result=rollDice(sides);
	return result
}

function rollDice(n) {        
	let outcome= Math.floor(Math.random()*n + 1);
	return outcome;
}

function displayHealth(fight, you, opponent) {
	if (fight === 0) {
		console.log("Your starting health: " + you);
		console.log("Your opponent's starting health: " + opponent);
	} else {
		console.log("Fight " + fight + ": " + "You = " + you + " Opponent = " + opponent);
	}
}

function displayResults(you, opponent) {
	if (you > opponent) {
		console.log("You win!");
	}
	else if (you === opponent) {
		console.log("You are at a stalemate");
	}
	else {
		console.log("You lose :(");
	}
}

runGame();