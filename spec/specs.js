describe('PickupGame Object', function() {
  it("selects the inputs from the user", function() {
    var testPickupGame = new PickupGame ("foo", "frisbee", "Rookie", false, "testing", "email me");
    expect(testPickupGame.namePickupGame).to.equal("foo");
    expect(testPickupGame.sport).to.equal("frisbee");
    expect(testPickupGame.skill).to.equal("Rookie");
    expect(testPickupGame.gameLocation).to.be.a("array");
    expect(testPickupGame.date).to.be.a("array");
    expect(testPickupGame.recurring).to.equal(false);
    expect(testPickupGame.notes).to.equal("testing");
    expect(testPickupGame.contact).to.equal("email me");
    });
});

describe('GameLocation Object', function() {
  it("selects the inputs from the user", function() {
    var testGameLoc = new GameLocation ("sesame street", "Portland", "OR", 97123);
    expect(testGameLoc.street).to.equal("sesame street");
    expect(testGameLoc.city).to.equal("Portland");
    expect(testGameLoc.state).to.equal("OR");
    expect(testGameLoc.zip).to.equal(97123);
  });

  it("returns corrected full address", function() {
    var testGameLoc = new GameLocation ("sesame street", "portlanD", "OR", 97123);
    expect(testGameLoc.fullAddress()).to.equal("sesame street, Portland, OR 97123");
  });
});

describe('Date Object', function() {
  it("selects the inputs from the user", function() {
    var testGameDate = new GameDate ("2/4/2016", "1800");
    expect(testGameDate.gameDate).to.equal("2/4/2016");
    expect(testGameDate.gameTime).to.equal("1800");
  });
});

describe('PickupGame List', function() {
  it("displays the info from the objects in the list", function() {
    var game1 = new PickupGame ("foo", "frisbee", "Rookie", false, "testing", "email me");
    var game2 = new PickupGame ("bar", "football", "seasoned", false, "note to myself", "email me... I need friends");
    var newList = [game1, game2];
    var testGame = newList[0];
    expect(testGame.namePickupGame).to.equal("foo");
    testGame = newList[1];
    expect(testGame.sport).to.equal("football");
  });
});
