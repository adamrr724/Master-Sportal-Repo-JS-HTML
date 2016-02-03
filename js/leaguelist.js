var league0 = { nameLeague: "Soccer League", sport: "soccer", skill: "Advanced", age: "Kids", cost:"Under $50", gameLocation: "900 SW  12th Ave, Portland, OR 97209" , date: "On 2016-02-03 at 01:02", recurring: false, notes: "Play Easy on Adam", contact: "talh@gmail.com"};

var league1 = { nameLeague: "Flag Football League", sport: "football", skill: "All Skill Levels", age: "Kids", cost: "Under $50", gameLocation: "123 main st, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: false, notes: "Flags are provided", contact: "adamrr@gmail.com"};

var league2 = { nameLeague: "Soccer Madness", sport: "soccer", skill: "Newbie", age: "Kids", cost: "Under $50", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: false, notes: "Flags are provided", contact: "adamrr@gmail.com"};

var league3 = { nameLeague: "Hoops", sport: "basketball", skill: "Newbie", age: "Kids", cost: "Under $50", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: true, notes: "Play Easy on Adam", contact: "anna@gmail.com"};

var league4 = { nameLeague: "Unidentified flying frisbees League", sport: "frisbee", skill: "Newbie", age: "Kids", cost: "Under $50", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: false, notes: "Points for hitting Adam with the disc", contact: "marika@gmail.com"};

var leagues = [league0, league1, league2, league3, league4]; //array of league objs


/** Searches for input name **/
var compareNames = function(pickupGames, nameFilter) {
  var compareName = null;
  for(var i = 0; i < pickupGames.length; i++) {
    compareName = pickupGames[i];
    if(compareName.nameLeague === nameFilter) {
      console.log("compare name is: " + compareName);
      return compareName;
    }
  }
  return false;
}

var compareLeagues = function(pickupGames, sportFilter, skillFilter) {
  var filteredLeagues = [];
  var compareGame = null;
  for(var i = 0; i < pickupGames.length; i++) {
    compareGame = pickupGames[i];
    if(compareGame.sport === sportFilter && compareGame.skill === skillFilter) {
      filteredLeagues.push(compareGame);
    }
  }
//  console.log(filteredGames);
  return filteredLeagues;
};


$(function() {

  /** when search by game name **/
  $("form#find-league-name").submit(function(event) {
    event.preventDefault();

    var nameFilter = $("input#find-name").val();

    var nameMatches = compareNames(leagues, nameFilter);

    if(!nameMatches === false) {
       $("#leagues").append("<li class='leagues'>" + nameMatches.nameLeague + "</li>");
    } else {
      alert("No results found");
    }

    $(".leagues").last().click(function() {
      $(".show-league-details").show();
      $("#event-name").text(nameMatches.nameLeague);
      $("#location").text(nameMatches.gameLocation);
      $("#sport").text(nameMatches.sport);
      $("#skills").text(nameMatches.skill);
      $("#age").text(nameMatches.age);
    });

  });

  /** when search by filters **/
  $("form#find-league").submit(function(event) {
    event.preventDefault();

    var sportFilter = $("select.sport-type").val();
    var skillFilter = $("select.skill-level").val();

    var filterMatches = compareLeagues(leagues, sportFilter, skillFilter);
    console.log(filterMatches);
    if(filterMatches[0] !== undefined) {
      for(var i = 0; i < filterMatches.length; i++) {
         $("#leagues").append("<li class='leagues'>" + filterMatches[i].nameLeague + "</li>");
       }
    } else {
      alert("No results found");
    }

    $(".leagues").last().click(function() {
      $(".show-league-details").show();
      $("#event-name").text(filterMatches.nameLeague);
      $("#location").text(filterMatches.gameLocation);
      $("#sport").text(filterMatches.sport);
      $("#skills").text(filterMatches.skill);
      $("#age").text(filterMatches.age);
    });
  });
});
