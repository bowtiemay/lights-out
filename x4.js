$(document).ready(() => {

  $("td").addClass("lightsOn");

  //set initial configuration

  setInitialConfiguration();

  $("h2").toggle(); //so that we can't see the you won string

  //test to make sure that "you won" is displayed
  // $("tr:nth-child(3) td:nth-child(3)").addClass("lightsOn");
  // $("tr:nth-child(3) td:nth-child(4)").addClass("lightsOn");
  // $("tr:nth-child(3) td:nth-child(2)").addClass("lightsOn");
  // $("tr:nth-child(2) td:nth-child(3)").addClass("lightsOn");
  // $("tr:nth-child(4) td:nth-child(3)").addClass("lightsOn");

  //for clicking the reset button - this button was just for my ease, doesnt meet ex reqs
  $("#reset").click(() => {
    setInitialConfiguration();
  });

  //for clicking on table elements
	$("td").click(() => {

    let target = $(event.currentTarget);
    let currentIndex = target.index(); //box clicked
    let targetRight = target.next(); //box to the right
    let targetLeft = target.prev();  //box to the left

    let rowAbove = (target.parent()).prev();  //get the previous row
    let targetAbove = rowAbove.children().eq(currentIndex); //get the column in the above row with the same index als the current index
    let rowBelow = (target.parent()).next();  //get the next row
    let targetBelow = rowBelow.children().eq(currentIndex); //get the column in the row below with the same index als the current index

    //if the middle tile has the light on, turn it off and vice versa
  	if (target.hasClass("lightsOn")) {
  	   target.removeClass("lightsOn");
  	}
  	else {
  	   target.addClass("lightsOn");
  	}

    //do the same with the surrounding tiles

    //tile to the right
    if (targetRight.hasClass("lightsOn")) {
      targetRight.removeClass("lightsOn");
    }
    else {
  	   targetRight.addClass("lightsOn");
  	}

    //tile to the left
    if (targetLeft.hasClass("lightsOn")) {
      targetLeft.removeClass("lightsOn");
    }
    else {
  	   targetLeft.addClass("lightsOn");
  	}

    //tile above
    if (targetAbove.hasClass("lightsOn")) {
      targetAbove.removeClass("lightsOn");
    }
    else {
  	   targetAbove.addClass("lightsOn");
  	}

    //tile below
    if (targetBelow.hasClass("lightsOn")) {
      targetBelow.removeClass("lightsOn");
    }
    else {
  	  targetBelow.addClass("lightsOn");
  	}

    let notWin = $("td").hasClass("lightsOn"); //will be false if no lights are on

    // if no lights are on, then you've won the game

    if (notWin == false) {
      $("h2").toggle();  //display the 'you won' string
    }
	});

  function setInitialConfiguration() {
    $("tr:nth-child(4) td:nth-child(5)").addClass("lightsOn");
    $("tr:nth-child(2) td:nth-child(4)").addClass("lightsOn");
    $("tr:nth-child(4) td:nth-child(1)").addClass("lightsOn");
    $("tr:nth-child(2) td:nth-child(2)").addClass("lightsOn");
    $("tr:nth-child(1) td:nth-child(3)").addClass("lightsOn");
    $("tr:nth-child(5) td:nth-child(5)").addClass("lightsOn");
    $("tr:nth-child(4) td:nth-child(3)").addClass("lightsOn");
    $("tr:nth-child(1) td:nth-child(5)").addClass("lightsOn");
    $("tr:nth-child(5) td:nth-child(1)").addClass("lightsOn");
    $("tr:nth-child(3) td:nth-child(2)").addClass("lightsOn");

    $("tr:nth-child(1) td:nth-child(1)").removeClass("lightsOn");
    $("tr:nth-child(2) td:nth-child(1)").removeClass("lightsOn");
    $("tr:nth-child(1) td:nth-child(2)").removeClass("lightsOn");
    $("tr:nth-child(1) td:nth-child(4)").removeClass("lightsOn");
    $("tr:nth-child(1) td:nth-child(1)").removeClass("lightsOn");
    $("tr:nth-child(2) td:nth-child(5)").removeClass("lightsOn");
    $("tr:nth-child(2) td:nth-child(3)").removeClass("lightsOn");
    $("tr:nth-child(3) td:nth-child(1)").removeClass("lightsOn");
    $("tr:nth-child(1) td:nth-child(2)").removeClass("lightsOn");
    $("tr:nth-child(3) td:nth-child(3)").removeClass("lightsOn");
    $("tr:nth-child(3) td:nth-child(4)").removeClass("lightsOn");
    $("tr:nth-child(3) td:nth-child(5)").removeClass("lightsOn");
    $("tr:nth-child(4) td:nth-child(2)").removeClass("lightsOn");
    $("tr:nth-child(5) td:nth-child(2)").removeClass("lightsOn");
    $("tr:nth-child(5) td:nth-child(3)").removeClass("lightsOn");
    $("tr:nth-child(5) td:nth-child(4)").removeClass("lightsOn");
  };

});
