/***** Pickup Game List *****/
function PickupGameList() {

}

/***** Pickup Game Object gets info from user input *****/
function PickupGame(namePickupGame, sport, skill, recurring, notes, contact) {
  this.namePickupGame = namePickupGame;
  this.sport = sport;
  this.skill = skill;
  this.gameLocation = [];
  this.date = [];
  this.recurring = recurring;
  this.notes = notes;
  this.contact = contact;
}

/***** Pickup Game Location Object gets info from user input *****/
function GameLocation(street, city, state, zip) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

/***** Returns full address after error checking for cap errors in city *****/
GameLocation.prototype.fullAddress = function () {
  this.city = this.city.toLowerCase();
  this.city = this.city[0].toUpperCase() + this.city.slice(1);
  return this.street + ", " + this.city + ", " + this.state + " " + this.zip;
};

/***** Pickup Game Date Object gets info from user input *****/
function GameDate(gameDate, gameTime) {
  this.gameDate = gameDate;
  this.gameTime = gameTime;
}

/***** Returns full date *****/
GameDate.prototype.fullDate = function () {
  return "On " + this.gameDate + " at "+ this.gameTime;
};


$(document).ready(function() {

  $("form#create-pu-game").submit(function(event) {
  event.preventDefault();

  var name = $("input.new-event-name").val();
  var sport = $("select.sport-type").val();
  var skill  $("select.skill-level").val();
  var recurring = $("select.recurring").val();
  var notes = $("").val();
  var contact = $("").val();
  var newPickup = new PickupGame (name, sport, skill, recurring, notes, contact);


  var street = $("").val();
  var city = $("").val();
  var state = $("").val();
  var zip = $("").val();
  var newLocation = new GameLocation (street, city, state, zip);
  newPickup.gameLocation.push(GameLocation.fullAddress());

  var date = $("").val();
  var time = $("").val();
  var newDate = new GameDate (date, time);
  newPickup.date.push(GameDate.fullDate());

  });
});
