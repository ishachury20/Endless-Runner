
'use strict'

let config = {
    type: Phaser.WEBGL, 
    render: {
        pixelArt: true, 
    }, 
    width: 640, 
    height: 480, 
    scene: [Menu, Tutorial, Play, GameOver], //add Menu scene 
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


let game = new Phaser.Game(config); 

let borderUISize = game.config.height / 25; 
let borderPadding = borderUISize / 15; 

let keySPACE; 
let keyRIGHT; 
let keyLEFT; 
let keyUP; 
let keyDOWN; 
let keyT; 
let keyR; 
let keyM; 

let rectangle1; 
let rectangle2; 
let rectangle3; 
let rectangle4; 

let heightvar; 
var velocityVar = 100; 

let gameOver = false; 
let direction = true; //true = right

var timer = 0; 
var highScore = 0; 
var currentScore = 0; 

let playerDirection = 'right'