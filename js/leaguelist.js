var league0 = { nameLeague: "Soccer League", sport: "Soccer", skill: "Advanced", age: "Kids", cost:"Under $50", gameLocation: "900 SW  12th Ave, Portland, OR 97209" , notes: "Play Easy on Adam", contact: "http//:google.com"};

var league1 = { nameLeague: "Flag Football League", sport: "Football", skill: "All Skill Levels", age: "Kids", cost: "Under $50", gameLocation: "123 main st, Portland, OR 97204" , notes: "Flags are provided", contact: "http//:google.com"};

var league2 = { nameLeague: "Soccer Madness", sport: "Soccer", skill: "Newbie", age: "Kids", cost: "Under $50", gameLocation: "400 SW  6th St, Portland, OR 97204" , notes: "Flags are provided", contact: "http//:google.com"};

var league3 = { nameLeague: "Hoops", sport: "Basketball", skill: "Newbie", age: "Kids", cost: "Under $50", gameLocation: "400 SW  6th St, Portland, OR 97204" ,  notes: "Play Easy on Adam", contact: "http//:google.com"};

var league4 = { nameLeague: "Unidentified flying frisbees League", sport: "Frisbee", skill: "Newbie", age: "Kids", cost: "Under $50", gameLocation: "400 SW  6th St, Portland, OR 97204" , notes: "Points for hitting Adam with the disc", contact: "http//:google.com"};

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

var resetFields = function() {
  $("input#find-name").val("");
}

$(function() {

  /** when search by game name **/
  $("form#find-league-name").submit(function(event) {
    event.preventDefault();

    var nameFilter = $("input#find-name").val();

    var matches = compareNames(leagues, nameFilter);

    if(!matches === false) {
       $(".resultshow").show();
       $("#leagues").append("<div class='resultsleague'>" + "<h3><span class='extra'>League Name: </span>" + matches.nameLeague + "</h3>" +
       "<div class='details'>" +
       "<h5><span class='extra'>Sport: </span>" +  matches.sport + "</h5>" +
       "<br><h5><span class='extra'>Skill Level: </span>" + matches.skill + "</h5>" +
       "<br><h5><span class='extra'>Cost: </span>" + matches.cost + "</h5>" +
       "<br><h5><span class='extra'>Location: </span>" + matches.gameLocation + "</h5>" +
       "<br><h5><span class='extra'>League Notes: </span>" + matches.notes + "</h5>" +
       "<br><h5><span class='extra'>League Website: </span>" + matches.contact + "</h5>" +
       "</div>" +
       "</div>");
    } else {
      alert("No results found");
    }
    /**reset the fields after submit**/
    resetFields();
    /**Toggle details**/
    $(".resultsleague").click(function() {
      $(this).children(".details").toggle("slow");
    });
  });

  /** when search by filters **/
  $("form#find-league").submit(function(event) {
    event.preventDefault();

    var sportFilter = $("select.sport-type").val();
    var skillFilter = $("select.skill-level").val();

    var matches = compareLeagues(leagues, sportFilter, skillFilter);
    if(matches[0] !== undefined) {
      for(var i = 0; i < matches.length; i++) {
         $(".resultshow").show();
         $("#leagues").append("<div class='resultsleague'>" + "<h3><span class='extra'>League Name: </span>" + matches[i].nameLeague + "</h3>" +
         "<div class='details'>" +
         "<h5><span class='extra'>Sport: </span>" +  matches[i].sport + "</h5>" +
         "<br><h5><span class='extra'>Skill Level: </span>" + matches[i].skill + "</h5>" +
         "<br><h5><span class='extra'>Cost: </span>" + matches[i].cost + "</h5>" +
         "<br><h5><span class='extra'>Location: </span>" + matches[i].gameLocation + "</h5>" +
         "<br><h5><span class='extra'>League Notes: </span>" + matches[i].notes + "</h5>" +
         "<br><h5><span class='extra'>League Website: </span>" + matches[i].contact + "</h5>" +
         "</div>" +
         "</div>");
       }
    } else {
      alert("No results found");
    }
    /**reset the fields after submit**/
    resetFields();
    /**Toggle details**/
    $(".resultsleague").click(function() {
      $(this).children(".details").toggle("slow");
    });

  });

});
