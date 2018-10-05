// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = (cardNumber) => {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  let network = "Unable to detect network. Invalid card number. Please try again!";
  let cardNum = cardNumber.split("");
  
  // Check if network is Diner's club 
  if (cardNum[0] === '3' && (cardNum[1] === '8' || cardNum[1] === '9')) {
  	if (cardNum.length === 14) {
      network = "Diner's Club";
    }
  // Check if network is American Express
  } else if (cardNum[0] === '3' && (cardNum[1] === '4' || cardNum[1] === '7')) {
  	if (cardNum.length === 15) {
  		network = "American Express";
    }
  // Check if network is Visa 
  } else if (cardNum[0] === '4') {
  	if (cardNum.length === 13 || cardNum.length === 16 || cardNum.length === 19) {
  		network = "Visa";
    }
  // Check if network is MasterCard
  } else if (cardNum[0] === '5' && (cardNum[1] === '1' || cardNum[1] === '2' || cardNum[1] === '3' || cardNum[1] === '4' || cardNum[1] === '5')) {
  	if (cardNum.length === 16) {
  		network = "MasterCard";
    }
  // Check if network is Discover 
  } else if (cardNumber.substr(0,4) === '6011' || (Number(cardNumber.substr(0,3)) >= 644 && Number(cardNumber.substr(0,3) <= 649)) || cardNumber.substr(0,2) === '65') {
  	if (cardNum.length === 16 || cardNum.length === 19) {
  		network = "Discover";
    }
  // Check if network is Maestro
  } else if (cardNumber.substr(0,4) === '5018' || cardNumber.substr(0,4) === '5020'  || cardNumber.substr(0,4) === '5038' || cardNumber.substr(0,4) === '6304') {
  	if (cardNum.length <= 19 || cardNum.length >= 12) {
  		network = "Maestro";
    }
  // Check if network is Union Pay 
  } else if ((Number(cardNumber.substr(0,6)) >= 622126 && Number(cardNumber.substr(0,6)) <= 622925)  || (Number(cardNumber.substr(0,3)) >= 624 && Number(cardNumber.substr(0,3)) <= 626) || (Number(cardNumber.substr(0,4)) >= 6282 && Number(cardNumber.substr(0,4)) <= 6288)){
  	if (cardNum.length <= 19 || cardNum.length >= 16) {
  		network = "Union Pay";
  	}
  }
  //Visa and Switch have some overlap in card numbers.  Choose network with longer prefix. In this situation, 
  //Switch will always override the Visa number.
  //By excluding Switch from the else statement, it will override the Visa numbers.
  let switchPre = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  // Iterate over list of switch prefixes 
  for (let i = 0; i < switchPre.length; i++) {
    // Check if card number prefix is equivalent to switch prefix 
    if (switchPre[i] === cardNumber.substr(0, switchPre[i].length)) {
      // Check the length of the card number
    	if (cardNum.length === 19 || cardNum.length === 16 || cardNum.length === 18) {
    		network = 'Switch';
    	}
    }
  }

  return network;
};


console.log(detectNetwork('90832423414')); // Expect to be invalid network
console.log(detectNetwork('4903123456789012')); //Expect to be Switch network 
