
'use strict'

let config = {
    type: Phaser.AUTO, 
    width: 640, 
    height: 480, 
    scene: [Menu, Play], //add Menu scene 
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    
}
console.log('wooooo!'); 


let game = new Phaser.Game(config); 

let borderUISize = game.config.height / 25; 
let borderPadding = borderUISize / 15; 

let keySPACE; 
let keyRIGHT; 
let keyLEFT; 
let keyUP; 
let keyDOWN; 

let rectangle1; 
let rectangle2; 
let rectangle3; 
let rectangle4; 

let gameOver = false; 

var highscore = 0; 
var highScoreText; 