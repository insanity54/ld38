function makeCards(){
    var cardValues = [1, 2, 3, 4, 5, 6, 7, 'j', 'q' ];
    var suits = ['kle', 'doe', 'mit'];
    var cards = [];
    var v;
    var s;
    for (s in suits) {
	for (v in cardValues) {
	    var card = {
		value: cardValues[v],
		suit: suits[s]
	    };
	    cards.push(card);
	}
    }
    return cards;
}

var deck = makeCards();

console.log(deck);
