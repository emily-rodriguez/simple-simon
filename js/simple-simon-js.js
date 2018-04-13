"use strict";


var gameSequence = [];

var greenButton = $('#green');
var redButton = $('#red');
var yelButton = $('#yellow');
var blueButton = $('#blue');

var clickCounter = 0;
var roundCounter = 0;

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
    $('.text-center').html("<h3>score: 0</h3>")

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
    console.log("Game sequence: " + gameSequence);

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
    roundCounter++
}

var playerSequence = [];

function matchArrays(array1, array2) {
    console.log("running match Arrays function");
    if (array1.length !== array2.length){
        return false;
    }
    for (var i=0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            clickCounter = 0;
             $('#center').html("<h3 id='gameOver'>Wrong</h3>");
        } else
        if ((i == (array1.length -1)) && (array1[i] === array2[i])) {
            playerSequence = [];
            clickCounter = 0;
            setTimeout(function () {
                gamePlay()
            }, 800);
            $('.text-center').html("<h3>score: " + roundCounter + "</h3>")
        }
    }
}

$('#play-again').click(function(){
    console.log("hello");
});


$(greenButton).click(function () {
    console.log("you clicked the green button");
    animateColor(greenButton);
    playerSequence.push(1);
    console.log("player sequence: " + playerSequence);
});

$(redButton).click(function () {
    console.log("you clicked the red button");
    animateColor(redButton);
    playerSequence.push(2);
    console.log("player sequence: " + playerSequence);
});

$(yelButton).click(function () {
    console.log("you clicked the yellow button");
    animateColor(yelButton);
    playerSequence.push(3);
    console.log("player sequence: " + playerSequence);
});

$(blueButton).click(function () {
    console.log("you clicked the blue button");
    animateColor(blueButton);
    playerSequence.push(4);
    console.log("player sequence: " + playerSequence);
});


















