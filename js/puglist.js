var game0 = { namePickupGame: "Soccer Match", sport: "Soccer", skill: "Advanced", gameLocation: "900 SW  12th Ave, Portland, OR 97209" , date: "On 2016-02-03 at 01:02", recurring: "Yes", notes: "Play Easy on Adam", contact: "talh@gmail.com"};

var game1 = { namePickupGame: "Flag Football", sport: "Football", skill: "All Skill Levels", gameLocation: "123 main st, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "No", notes: "Flags are provided", contact: "adamrr@gmail.com"};

var game2 = { namePickupGame: "Soccer Game", sport: "Soccer", skill: "Newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "Yes", notes: "Flags are provided", contact: "adamrr@gmail.com"};

var game3 = { namePickupGame: "Hoops", sport: "Basketball", skill: "Newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "No", notes: "Play Easy on Adam", contact: "anna@gmail.com"};

var game4 = { namePickupGame: "Unidentified flying frisbees", sport: "Frisbee", skill: "Newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "Yes", notes: "Points for hitting Adam with the disc", contact: "marika@gmail.com"};

var game5 = { namePickupGame: "Blood Sport", sport: "Krav", skill: "Advanced", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "No", notes: "Bring bandaids", contact: "anna@gmail.com"};

var game6 = { namePickupGame: "Billy Bob's Volleyball", sport: "Volleyball", skill: "Intermediate", gameLocation: "500 SW  11th Ave, Portland, OR 97205" , date: "On 2016-02-02 at 01:02", recurring: "Yes", notes: "Bring Short Shorts", contact: "billybob@gmail.com"};

var game7 = { namePickupGame: "Soccer Balls A Flying", sport: "Soccer", skill: "Newbie", gameLocation: "400 SW  6th St, Portland, OR 97204" , date: "On 2016-02-02 at 01:02", recurring: "No", notes: "BYOB", contact: "anna@gmail.com"};

var game8 = { namePickupGame: "Badminton of Death", sport: "Badminton", skill: "Newbie", gameLocation: "800 SW  6th St, Portland, OR 97213" , date: "On 2016-02-02 at 01:02", recurring: "No", notes: "Bring Feathered Balls... or birdies", contact: "anna@gmail.com"};

var game9 = { namePickupGame: "Basketball Downtown", sport: "Basketball", skill: "Newbie", gameLocation: "800 SW  6th St, Portland, OR 97213" , date: "On 2016-02-02 at 01:02", recurring: "No", notes: "Bring Feathered Balls... or birdies", contact: "anna@gmail.com"};

var pickupGames = [game0, game1, game2, game3, game4, game5, game6, game7, game8, game9]; //array of objects
//testing

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
    /* clear the results */
    $("#pickup-game-results").empty();
    var nameFilter = $("input#find-name").val();

    var matches = compareNames(pickupGames, nameFilter);

    if(matches !== false) {
       $(".resultshow").show();
       $("#pickup-game-results").append("<hr><div class='resultspickup'>" + "<h3><span class='extra'>Pickup Game Name:  </span>" + matches.namePickupGame + "</h3>" +
       "<div class='details'>" +
       "<h5><span class='extra'>Sport: </span>" +  matches.sport + "</h5>" +
       "<br><h5><span class='extra'>Skill Level: </span>" + matches.skill + "</h5>" +
       "<br><h5><span class='extra'>Recurring Event?: </span>" + matches.recurring + "</h5>" +
       "<br><h5><span class='extra'>Location: </span>" + matches.gameLocation + "</h5>" +
       "<br><h5><span class='extra'>Date: </span>" + matches.date + "</h5>" +
       "<br><h5><span class='extra'>Event Notes: </span>" + matches.notes + "</h5>" +
       "<br><h5><span class='extra'>Coordinator Contact Info: </span>" + matches.contact + "</h5>" +
       "</div>" +
       "</div>");
    } else {
      alert("No results found");
    }
    /**reset fields**/
    resetFields();
    /**Toggle Details**/
    $(".resultspickup").click(function() {
      $(this).children(".details").toggle("slow");
    });
  });

  /** when search by filters **/
  $("form#find-game").submit(function(event) {
    event.preventDefault();

    /* clear the results */
    $("#pickup-game-results").empty();

    var sportFilter = $("select.sport-type").val();
    var skillFilter = $("select.skill-level").val();

    var matches = compareGames(pickupGames, sportFilter, skillFilter);
    console.log(matches);
    if(matches[0] !== undefined) {
      for(var i = 0; i < matches.length; i++) {
         $(".resultshow").show();
         $("#pickup-game-results").append("<hr><div class='resultspickup'>" + "<h3><span class='extra'>Pickup Game Name:</span> " + matches[i].namePickupGame + "</h3>" +
         "<div class='details'>" +
         "<h5><span class='extra'>Sport:</span> " +  matches[i].sport + "</h5>" +
         "<br><h5><span class='extra'>Skill Level: </span>" + matches[i].skill + "</h5>" +
         "<br><h5><span class='extra'>Recurring Event?: </span>" + matches[i].recurring + "</h5>" +
         "<br><h5><span class='extra'>Location: </span>" + matches[i].gameLocation + "</h5>" +
         "<br><h5><span class='extra'>Date: </span>" + matches[i].date + "</h5>" +
         "<br><h5><span class='extra'>Event Notes: </span>" + matches[i].notes + "</h5>" +
         "<br><h5><span class='extra'>Coordinator Contact Info: </span>" + matches[i].contact + "</h5>" +
         "</div>" +
         "</div>");
       }
    } else {
      alert("No results found");
    }
    /**reset fields after submit**/
    resetFields();
    /**Toggle Details**/
    $(".resultspickup").click(function() {
      $(this).children(".details").toggle("slow");
    });
  });
});
