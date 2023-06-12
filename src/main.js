let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: "arcade",
    },
    backgroundColor: '#301934',
    scene: [ Logo, Menu, Intro, Level1, Level1Alt, Pause, Clues, Options, Credits, Pickup],
}

let game = new Phaser.Game(config);
let cursors = null;
let interact = null;
let travel = null;
let clueArr = [];
let display = 0;
let pmenu = null;
let paused = 0;
let playing = false;