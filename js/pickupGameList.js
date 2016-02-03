var game0 = { namePickupGame: "Soccer Match", sport: "soccer", skill: "advanced", gameLocation: "900 SW  12th Ave, Portland, OR 97209" , date: "On 2016-02-03 at 01:02", recurring: false, notes: "Play Easy on Adam", contact: "talh@gmail.com"};

var game1 = { namePickupGame: "Flag Football", sport: "football", skill: "all-levels", gameLocation: "123 main st, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: false, notes: "Flags are provided", contact: "adamrr@gmail.com"};

var game2 = { namePickupGame: "Soccer Game", sport: "soccer", skill: "newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: false, notes: "Flags are provided", contact: "adamrr@gmail.com"};

var game3 = { namePickupGame: "Hoops", sport: "basketball", skill: "newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: true, notes: "Play Easy on Adam", contact: "anna@gmail.com"};

var game4 = { namePickupGame: "Unidentified flying frisbees", sport: "frisbee", skill: "newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: false, notes: "Points for hitting Adam with the disc", contact: "marika@gmail.com"};

var game5 = { namePickupGame: "Blood Sport", sport: "krav", skill: "advanced", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: true, notes: "Bring bandaids", contact: "anna@gmail.com"};

var pickupGames = [game0, game1, game2, game3, game4, game5];
var sportFilter = "soccer";
var skillFilter = "newbie";
var nameFilter = "Blood Sport";
var filteredGames = [];

var compareNames = function(pickupGames) {
  for(var i = 0; i < pickupGames.length; i++) {
    var compareName = pickupGames[i];
    if(compareName.nameLeague === nameFilter) {
      return compareName;
    }
    return "No Results Found";
  }
}

var compareGames = function(filteredGames, pickupGames, sportFilter, skillFilter) {
  for(var i = 0; i < pickupGames.length; i++) {
    var compareGame = pickupGames[i];
    if(compareGame.sport === sportFilter && compareGame.skill === skillFilter) {
      filteredGames.push(compareGame);
    }
  }
  if(filteredGames[0] === undefined) {
    alert("nothing found");
  }
  return filteredGames;
};


$(function() {

  $("form#find-game-name").submit(function(event) {
    event.preventDefault();

    var nameFilter = $("select#nameFilter");

    //compareNames(nameFilter);

    alert("Hello");

  });

  $("form#search").submit(function(event) {
    event.preventDefault();

    var sportFilter = $("select#sportFilter");
    var skillFilter = $("select#skillFilter");

  });
});
