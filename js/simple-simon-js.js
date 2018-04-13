"use strict";


var gameSequence = [];

var greenButton = $('#green');
var redButton = $('#red');
var yelButton = $('#yellow');
var blueButton = $('#blue');



function getRandomColor() {
    var randomNumber = Math.floor((Math.random() * 4) + 1);
    return randomNumber;
}

function animateColor(object) {
    object.animate({opacity: "1"}, "fast", "linear", function(){
        $(this).fadeTo("opacity", "0.5");
    })
}

function gamePlay() {
    var colorCode = getRandomColor();
    console.log(colorCode);
    switch(colorCode) {
        case 1:
            animateColor(greenButton);
            gameSequence.push(colorCode);
            break;
        case 2:
            animateColor(redButton);
            gameSequence.push(colorCode);
            break;
        case 3:
            animateColor(yelButton);
            gameSequence.push(colorCode);
            break;
        case 4:
            animateColor(blueButton);
            gameSequence.push(colorCode);
            break;
    }
    console.log("Here is the updated game sequence: " + gameSequence);
}

$('#start-game').click(function(event){
    gamePlay();
    $(this).css("display", "none")
});

var playerSequence = [];

function matchArrays(array1, array2) {
    if (array1.length !== array2.length){
        return false;
    }
    for (var i=0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            alert("Sorry! You lose!")
        } else {
            playerSequence = [];
            setTimeout(function () {
                gamePlay()
            }, 800);
        }
    }
}



$(greenButton).click(function () {
        console.log("you clicked the green button");
        animateColor(greenButton);
        playerSequence.push(1);
        console.log(playerSequence);
});

$(redButton).click(function () {
    console.log("you clicked the red button");
    animateColor(redButton);
    playerSequence.push(2);
    console.log(playerSequence);
});

$(yelButton).click(function () {
    console.log("you clicked the yellow button");
    animateColor(yelButton);
    playerSequence.push(3);
    console.log(playerSequence);
});

$(blueButton).click(function () {
    console.log("you clicked the blue button");
    animateColor(blueButton);
    playerSequence.push(4);
    console.log(playerSequence);
});









