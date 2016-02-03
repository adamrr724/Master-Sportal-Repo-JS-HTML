var game0 = { namePickupGame: "Soccer Match", sport: "Soccer", skill: "Advanced", gameLocation: "900 SW  12th Ave, Portland, OR 97209" , date: "On 2016-02-03 at 01:02", recurring: "Yes", notes: "Play Easy on Adam", contact: "talh@gmail.com"};

var game1 = { namePickupGame: "Flag Football", sport: "Football", skill: "All Skill Levels", gameLocation: "123 main st, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "No", notes: "Flags are provided", contact: "adamrr@gmail.com"};

var game2 = { namePickupGame: "Soccer Game", sport: "Soccer", skill: "Newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "Yes", notes: "Flags are provided", contact: "adamrr@gmail.com"};

var game3 = { namePickupGame: "Hoops", sport: "Basketball", skill: "Newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "No", notes: "Play Easy on Adam", contact: "anna@gmail.com"};

var game4 = { namePickupGame: "Unidentified flying frisbees", sport: "Frisbee", skill: "Newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "Yes", notes: "Points for hitting Adam with the disc", contact: "marika@gmail.com"};

var game5 = { namePickupGame: "Blood Sport", sport: "Krav", skill: "Advanced", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "No", notes: "Bring bandaids", contact: "anna@gmail.com"};

var game6 = { namePickupGame: "Billy Bob's Volleyball", sport: "Volleyball", skill: "Intermediate", gameLocation: "500 SW  11th Ave, Portland, OR 97205" , date: "On 2016-02-02 at 01:02", recurring: "Yes", notes: "Bring Short Shorts", contact: "billybob@gmail.com"};

var game7 = { namePickupGame: "Soccer Balls A Flying", sport: "Soccer", skill: "Newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "No", notes: "BYOB", contact: "anna@gmail.com"};

var pickupGames = [game0, game1, game2, game3, game4, game5, game6, game7]; //array of objects


/** Searches for input name **/
var compareNames = function(pickupGames, nameFilter) {
  var compareName = null;
  for(var i = 0; i < pickupGames.length; i++) {
    compareName = pickupGames[i];
    if(compareName.namePickupGame === nameFilter) {
      return compareName;
    }
  }
  return false;
}

var compareGames = function(pickupGames, sportFilter, skillFilter) {
  var filteredGames = [];
  var compareGame = null;
  for(var i = 0; i < pickupGames.length; i++) {
    compareGame = pickupGames[i];
    if(compareGame.sport === sportFilter && compareGame.skill === skillFilter) {
      filteredGames.push(compareGame);
    }
  }
//  console.log(filteredGames);
  return filteredGames;
};

  var resetFields = function() {
    $("input#find-name").val("");
  }

/***************** jQuery ************************************/
/***************** after page is ready ***********************/
$(function() {
  /** when search by game name **/
  $("form#find-game-name").submit(function(event) {
    event.preventDefault();

    var nameFilter = $("input#find-name").val();

    var matches = compareNames(pickupGames, nameFilter);

    if(matches !== false) {
       $("#pickup-game-results").append("<div class='resultspickup'>" + "<h4>Pickup Game Name: " + matches.namePickupGame + "</h4>" +
       "<h5>Sport:</h5>" +  matches.sport +
       "<br><h5>Skill Level:</h5>" + matches.skill +
       "<br><h5>Recurring Event?:</h5>" + matches.recurring +
       "<br><h5>Location:</h5>" + matches.gameLocation +
       "<br><h5>Date:</h5>" + matches.date +
       "<br><h5>Event Notes:</h5>" + matches.notes +
       "<br><h5>Coordinator Contact Info:</h5>" + matches.contact +
       "</div>");
    } else {
      alert("No results found");
    }

    resetFields();
  });

  /** when search by filters **/
  $("form#find-game").submit(function(event) {
    event.preventDefault();

    var sportFilter = $("select.sport-type").val();
    var skillFilter = $("select.skill-level").val();

    var matches = compareGames(pickupGames, sportFilter, skillFilter);
    console.log(matches);
    if(matches[0] !== undefined) {
      for(var i = 0; i < matches.length; i++) {
         $("#pickup-game-results").append("<div class='resultspickup'>" + "<h4>Pickup Game Name: " + matches[i].namePickupGame + "</h4>" +
         "<h5>Sport:</h5>" +  matches[i].sport +
         "<br><h5>Skill Level:</h5>" + matches[i].skill +
         "<br><h5>Recurring Event?:</h5>" + matches[i].recurring +
         "<br><h5>Location:</h5>" + matches[i].gameLocation +
         "<br><h5>Date:</h5>" + matches[i].date +
         "<br><h5>Event Notes:</h5>" + matches[i].notes +
         "<br><h5>Coordinator Contact Info:</h5>" + matches[i].contact +
         "</div>");
       }
    } else {
      alert("No results found");
    }

    resetFields();
  });
});
