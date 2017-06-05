var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
	this.front = front
	this.back = back
}

var card1 = new BasicCard("What spice is often considered as the most expensive one by weight?", "saffron");
var card2 = new BasicCard("What does the fox say?", "ring a ding ding"); 

cards.push(card1);
cards.push(card2);


function studyCards() {
	//loop to prompt each question individually w/inquirer
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "question",
						message: cards[cardCount].front
					}
				]).then(function(answer) {

					if((answer.question).toLowerCase() === cards[cardCount].back) {
						console.log("correct");
						//increase card count per loop
						cardCount ++
					
						studyCards();
					} 
					else {
						//state back of card
						console.log("incorrect");
						console.log("BACK READS:  " + cards[cardCount].back);
						//increase card count per loop
						cardCount ++
						
						studyCards();
					}

				});

	}


}//studyCards function

studyCards();

module.exports = BasicCard;