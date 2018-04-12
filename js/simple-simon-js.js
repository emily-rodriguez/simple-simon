"use strict";

var gameSequence = [];

function getRandomColor() {
    var randomNumber = Math.floor((Math.random() * 1) + 1);
    return randomNumber;
}

$('#start-game').click(function(event) {
        var colorCode = getRandomColor();
        console.log(colorCode);
        if(colorCode === 1) {
            $('#red').animate({opacity: "1"});
            gameSequence.push(colorCode);
        }
        if(colorCode === 2) {
            $('#blue').css('opacity', '1');
            gameSequence.push(colorCode);
        }
        if(colorCode === 3) {
            $('#green').css('opacity', '1');
            gameSequence.push(colorCode);
        }
        if(colorCode === 4) {
            $('#yellow').css('opacity', '1');
            gameSequence.push(colorCode);
        }
    console.log(gameSequence);
});


