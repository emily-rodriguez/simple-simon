"use strict";

var gameSequence = [];

function getRandomColor() {
    var randomNumber = Math.floor((Math.random() * 4) + 1);
    return randomNumber;
}

function gamePlay() {
    var colorCode = getRandomColor();
    console.log(colorCode);
    if(colorCode === 1) {
        $('#green').animate({opacity: "1"});
        gameSequence.push(colorCode);
    }
    if(colorCode === 2) {
        $('#red').css('opacity', '1');
        gameSequence.push(colorCode);
    }
    if(colorCode === 3) {
        $('#yellow').css('opacity', '1');
        gameSequence.push(colorCode);
    }
    if(colorCode === 4) {
        $('#blue').css('opacity', '1');
        gameSequence.push(colorCode);
    }
    console.log(gameSequence);
}

$('#start-game').click(function(event){
    gamePlay();
    // $(this).css("display", "none");

});



