/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value


describe('Diner\'s Club', function() {
  var expect = chai.expect; 

  it('has a prefix of 38 and a length of 14', function() {
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club') 
  });
 
});

describe('American Express', function() {
  var expect = chai.expect; 
  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var expect = chai.expect;
 

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
   it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  var expect = chai.expect; 

  it('has a prefix of 6011 and a length of 16', function() { 
    expect(detectNetwork('6011567890125544')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() { 
    expect(detectNetwork('6011567890125544789')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() { 
    expect(detectNetwork('6511567890125544')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() { 
    expect(detectNetwork('6511567890125544789')).to.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
   (function(prefix) {

    it('has a prefix of ' + prefix + ' and a length of 16', function () { 
      expect(detectNetwork(prefix + '1567890125544')).to.equal('Discover');
    });

    it('has a prefix of ' + prefix + ' and a length of 19', function () { 
      expect(detectNetwork(prefix + '1567890125544789')).to.equal('Discover');
    });
   })(prefix);
  }

});

describe('Maestro', function() {
  //  Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  var expect = chai.expect; 
  
  var numFiller = function(length) {
    var container = [];
    for(var i = 0; i < length; i++){
      container.push("1");
    }
    return container.join(""); 
  }
  
  for(var length = 12; length <= 19 ; length++){
    (function(length) {
      it('has a prefix of 5018 and a length of ' + length, function(){
        expect(detectNetwork(('5018' + numFiller(length - 4)))).to.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ' + length, function(){
        expect(detectNetwork(('5020' + numFiller(length - 4)))).to.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + length, function(){
        expect(detectNetwork(('5038' + numFiller(length - 4)))).to.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ' + length, function(){
        expect(detectNetwork(('6304' + numFiller(length - 4)))).to.equal('Maestro');
      });
    })(length)
  }

});

describe('China UnionPay', function() { 
 var expect = chai.expect;

 // Test for 6 digit prefix 

  for (var prefix = 622126; prefix <= 622925; prefix++) {
   (function(prefix) {

    it('has a prefix of ' + prefix + ' and a length of 16', function () { 
      expect(detectNetwork(prefix + '1234567890')).to.equal('Union Pay');
    });

    it('has a prefix of ' + prefix + ' and a length of 17', function () { 
      expect(detectNetwork(prefix + '12345678901')).to.equal('Union Pay');
    });

    it('has a prefix of ' + prefix + ' and a length of 18', function () { 
      expect(detectNetwork(prefix + '123456789012')).to.equal('Union Pay');
    });

    it('has a prefix of ' + prefix + ' and a length of 19', function () { 
      expect(detectNetwork(prefix + '1234567890123')).to.equal('Union Pay');
    });

   })(prefix);
  }

  // Test for 3 digit prefix 
   for (var prefix = 624; prefix <= 626; prefix++) {
   (function(prefix) {

    it('has a prefix of ' + prefix + ' and a length of 16', function () { 
      expect(detectNetwork(prefix + '1234567890123')).to.equal('Union Pay');
    });

    it('has a prefix of ' + prefix + ' and a length of 17', function () { 
      expect(detectNetwork(prefix + '12345678901234')).to.equal('Union Pay');
    });

    it('has a prefix of ' + prefix + ' and a length of 18', function () { 
      expect(detectNetwork(prefix + '123456789012345')).to.equal('Union Pay');
    });

    it('has a prefix of ' + prefix + ' and a length of 19', function () { 
      expect(detectNetwork(prefix + '1234567890123456')).to.equal('Union Pay');
    });

   })(prefix);
  }
  
  // Test for 4 digit prefix 
  for (var prefix = 6282; prefix <= 6288; prefix++) {
   (function(prefix) {

    it('has a prefix of ' + prefix + ' and a length of 16', function () { 
      expect(detectNetwork(prefix + '123456789012')).to.equal('Union Pay');
    });

    it('has a prefix of ' + prefix + ' and a length of 17', function () { 
      expect(detectNetwork(prefix + '1234567890123')).to.equal('Union Pay');
    });

    it('has a prefix of ' + prefix + ' and a length of 18', function () { 
      expect(detectNetwork(prefix + '12345678901234')).to.equal('Union Pay');
    });

    it('has a prefix of ' + prefix + ' and a length of 19', function () { 
      expect(detectNetwork(prefix + '123456789012345')).to.equal('Union Pay');
    });
   })(prefix);
  }
  
  


});  


describe('Switch', function () { 
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
 var expect = chai.expect;

   // Length of 16 for Switch for 4 digit prefix 
  it('has a prefix of 4903 and a length of 16', function() {
    expect(detectNetwork('4903678901234516')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 16', function() {
    expect(detectNetwork('4905678901234516')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 16', function() {
    expect(detectNetwork('4911678901234516')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 16', function() {
    expect(detectNetwork('4936678901234516')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 16', function() {
    expect(detectNetwork('6333678901234516')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 16', function() {
    expect(detectNetwork('6759678901234516')).to.equal('Switch');
  }); 

  // Length of 18 for Switch with 4 digit prefix 
  it('has a prefix of 4903 and a length of 18', function() {
    expect(detectNetwork('490312345678901218')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 18', function() {
    expect(detectNetwork('490567890123451618')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 18', function() {
    expect(detectNetwork('491167890123451618')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 18', function() {
    expect(detectNetwork('493667890123451618')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 18', function() {
    expect(detectNetwork('633367890123451618')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 18', function() {
    expect(detectNetwork('675967890123451618')).to.equal('Switch');
  }); 

  // Length of 19 
  it('has a prefix of 4903 and a length of 19', function() {
    expect(detectNetwork('4903123456789012119')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 19', function() {
    expect(detectNetwork('4905678901234516189')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 19', function() {
    expect(detectNetwork('4911678901234516189')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 19', function() {
    expect(detectNetwork('4936678901234516189')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 19', function() {
    expect(detectNetwork('6333678901234516189')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 19', function() {
    expect(detectNetwork('6759678901234516189')).to.equal('Switch');
  }); 

  // Six Digit Prefix Test for Switch 
  it('has a prefix of 564182 and a length of 16', function() {
    expect(detectNetwork('5641821234567890')).to.equal('Switch');
  }); 

  it('has a prefix of 564182 and a length of 18', function() {
    expect(detectNetwork('564182123456789018')).to.equal('Switch');
  }); 

  it('has a prefix of 564182 and a length of 19', function() {
    expect(detectNetwork('5641821234567890119')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 16', function() {
    expect(detectNetwork('6331101234567890')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 18', function() {
    expect(detectNetwork('633110123456789018')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 19', function() {
    expect(detectNetwork('6331101234567890119')).to.equal('Switch');
  }); 

});