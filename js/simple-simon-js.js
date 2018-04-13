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
        gameSequence.push(gameSequence);
    };

function gamePlay() {
    var colorCode = getRandomColor();
    console.log(colorCode);
    switch(colorCode) {
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
        default:
            console.log("This should never happen");
            break
    }
    console.log(gameSequence);
}

$('#start-game').click(function(event){
    gamePlay();
    // $(this).css("display", "none");
    // var i = 0;
    // console.log()

});



