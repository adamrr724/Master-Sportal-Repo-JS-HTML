var game0 = { namePickupGame: "Soccer Match", sport: "soccer", skill: "advanced", gameLocation: "900 SW  12th Ave, Portland, OR 97209" , date: "On 2016-02-03 at 01:02", recurring: false, notes: "Play Easy on Adam", contact: "talh@gmail.com"};

var game1 = { namePickupGame: "Flag Football", sport: "football", skill: "all-levels", gameLocation: "123 main st, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: false, notes: "Flags are provided", contact: "adamrr@gmail.com"};

var game2 = { namePickupGame: "Soccer Game", sport: "soccer", skill: "newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: false, notes: "Flags are provided", contact: "adamrr@gmail.com"};

var game3 = { namePickupGame: "Hoops", sport: "basketball", skill: "newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: true, notes: "Play Easy on Adam", contact: "anna@gmail.com"};

var game4 = { namePickupGame: "Unidentified flying frisbees", sport: "frisbee", skill: "newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: false, notes: "Points for hitting Adam with the disc", contact: "marika@gmail.com"};

var game5 = { namePickupGame: "Blood Sport", sport: "krav", skill: "advanced", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: true, notes: "Bring bandaids", contact: "anna@gmail.com"};

var pickupGames = [game0, game1, game2, game3, game4, game5]; //array of objects


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


$(function() {

  /** when search by game name **/
  $("form#find-game-name").submit(function(event) {
    event.preventDefault();

    var nameFilter = $("input#find-name").val();

    var nameMatches = compareNames(pickupGames, nameFilter);

    if(!nameMatches === false) {
       $("#pickup-game-results").append("<li>" + nameMatches.namePickupGame + "</li>");
    } else {
      alert("No results found");
    }

    $("#pickup-game-results").last().click(function() {
      $(".show-pickup-details").show();
      $("#event-name").text(nameMatches.namePickupGame);
      $("#location").text(nameMatches.gameLocation);
      $("#sport").text(nameMatches.sport);
      $("#skills").text(nameMatches.skill);
      $("#age").text(nameMatches.age);
    });

  });

  /** when search by filters **/
  $("form#find-game").submit(function(event) {
    event.preventDefault();

    var sportFilter = $("select.sport-type").val();
    var skillFilter = $("select.skill-level").val();

    var filterMatches = compareGames(pickupGames, sportFilter, skillFilter);
    console.log(filterMatches);
    if(filterMatches[0] !== undefined) {
      for(var i = 0; i < filterMatches.length; i++) {
         $("#pickup-game-results").append("<li>" + filterMatches[i].namePickupGame + "</li>");
       }
    } else {
      alert("No results found");
    }

  });
});
