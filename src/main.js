//Isha Chury 
//Rocket Patrol: Modified Missions 
//8-10 hours 
//mods implemented 
    //mouse control (+5)
    //player controls rocket after its fired (+1)
    //new background sprite (+1)
    //parallax effect (+3)
    //new background music (+1)
    //speed increase after 30 secs (+1) 
    //new enemy spaceship (+5) 
    //high score (+1)
    //timer/countdown (+3) 
//citations listed near codes that drew from them, or used snippets
//https://stackoverflow.com/questions/37408825/create-a-high-score-in-phaser [high score]
//https://youtu.be/-lJ2SQnbPSU?si=5QYsB6UQ2Kql6Q9z [parallax effect]
//https://newdocs.phaser.io/docs/3.55.2/focus/Phaser.Time.Clock-delayedCall [delayed calls]
//https://phaser.io/examples/v3/view/games/breakout/breakout [control rocket after firing]
//https://phaser.io/examples/v3/view/input/mouse/pointer-lock [mouse control]

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