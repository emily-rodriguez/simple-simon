"use strict";


var gameSequence = [];

var greenButton = $('#green');
var redButton = $('#red');
var yelButton = $('#yellow');
var blueButton = $('#blue');

var clickCounter = 0;

$(document).click(function(){
    clickCounter++;
    console.log("click counter: " + clickCounter);
    if (clickCounter == gameSequence.length) {
        matchArrays(gameSequence, playerSequence)
    }
});

$('#start-game').click(function(event){
    gamePlay();
    $(this).css("display", "none");
    clickCounter =- 1;
    console.log(clickCounter);
});

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
    gameSequence.push(colorCode);
    console.log(colorCode);
    var i = 0;
    var max = gameSequence.length;
    var interval = 800;

    var intervalId = setInterval(function(){
        if (i >= max) {
            clearInterval(intervalId);
            return;
        }
        switch(gameSequence[i]) {
            case 1:
                animateColor(greenButton);
                break;
            case 2:
                animateColor(redButton);
                break;
            case 3:
                animateColor(yelButton);
                break;
            case 4:
                animateColor(blueButton);
                break;
        }
        i++;
    }, interval);
    console.log("Here is the updated game sequence: " + gameSequence);
}

var playerSequence = [];

function matchArrays(array1, array2) {
    if (array1.length !== array2.length){
        return false;
    }
    for (var i=0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            $('.container').html('<div id="error-message" class="mx-auto"><h1 class="text-center">Sorry! You lose!</h1><div class="text-center"><button type="button" class="btn btn-warning" id="play-again">Play Again?</button></div></div>');
        }
    }
    playerSequence = [];
    clickCounter = 0;
    setTimeout(function () {
        gamePlay()
    }, 800);
}

$('#play-again').click(function(){
    console.log("hello");
});


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

















