//Isha Chury 
//Island Hopper 
//35 hours (approximately)
//artistic creative tilt: I think my game's visual style is very appealing to many people. I'm particularly proud of the background art, as well as the player character (though it took me quite a while to draw the character spritesheet). I'm also very proud of the animations! 
//technically creative tilt: I think the way the clouds were randomly produced was creative. I created a timer callback every 5 seconds that would call a function that created clouds, and dispersed them randomly across the height of the game screen. 

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
            //debug: true,
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