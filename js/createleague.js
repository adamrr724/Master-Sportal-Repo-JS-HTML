/***** Pickup Game Object gets info from user input *****/
function PickupLeague(nameLeague, sport, skill, age, cost, notes, contact) {
  this.nameLeague = nameLeague;
  this.sport = sport;
  this.skill = skill;
  this.age = age;
  this.cost = cost;
  this.gameLocation = [];
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

var resetFields = function() {
  $("input.new-league-name").val("");
  $("input.website").val("");
  $("textarea.notes").val("");
  $("input.address").val("");
  $("input.city").val("");
  $("input.state").val("");
  $("input.zip").val("");
}

/*** jQuery ***/
$(document).ready(function() {

  /*** Create a pickup game ***/
  $("form#create-league-game").submit(function(event) {
    event.preventDefault();

    var name = $("input.new-league-name").val();
    var sport = $("select.sport-type").val();
    var skill = $("select.skill-level").val();
    var age = $("select.age-level").val();
    var cost = $("select.cost").val();
    var notes = $("textarea.notes").val();
    var contact = $("input.website").val();
    var newLeague = new PickupLeague (name, sport, skill, age, cost, notes, contact);

    /**** Get location section ****/
    var street = $("input.address").val();
    var city = $("input.city").val();
    var state = $("select.state").val();
    var zip = $("input.zip").val();
    var newLocation = new GameLocation (street, city, state, zip);
    newLeague.gameLocation.push(newLocation.fullAddress());
    /*** Append new leagues ***/
    $(".resultshow").show();
    $("ul#leagues").append("<li><span class='new-leagues'>" + newLeague.nameLeague + "</span></li>");

  resetFields();

    $(".new-leagues").last().click(function() {
      $(".show-pickup-details").show();
      $("#event-name").text(newLeague.nameLeague);
      $("#location").text(newLeague.gameLocation);
      $("#sport").text(newLeague.sport);
      $("#skills").text(newLeague.skill);
      $("#age").text(newLeague.age);
      $("#notes").text(newLeague.notes);
      $("#website").text(newLeague.contact);
    });
  });
});
