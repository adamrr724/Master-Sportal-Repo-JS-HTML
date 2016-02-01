/***** Pickup Game Object gets info from user input *****/
function PickupGame(namePickupGame, sport, recurring, notes, contact) {
  this.namePickupGame = namePickupGame;
  this.sport = sport;
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
Date.prototype.fullDate = function () {
  return "On " + this.gameDate + " at "+ this.gameTime;
};
