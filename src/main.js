let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    backgroundColor: '#301934',
    scene: [ Logo, Menu, Intro, Level1, Level1Alt, Level2, Level2Future, Level3, Level3Future, Level3Past, Pause, Options, Credits, Pickup, TimeTravel, FutureLock, TravelSelect],
}

let game = new Phaser.Game(config);
let display = 0;
let pmenu = null;
let playing = false;
let mopp = true;
let full = false;
let backgroundMusic;
let level = 0;
let lock = false;
let key = false;