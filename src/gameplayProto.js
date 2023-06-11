class Level1 extends Phaser.Scene {
    constructor(){
        super('level1');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('bed', 'bed_present.png');
        this.load.image('bookshelf', 'bookshelf_present.png');
        this.load.image('carpet', 'carpet_present.png');
        this.load.image('chair', 'chair_present.png');
        this.load.image('couch', 'couch_present.png');
        this.load.image('door', 'door_present.png');
        this.load.image('lock', 'lock_present.png');
        this.load.image('tv', 'tv_present.png');
    }
    create(){

    }
}

class Level1Alt extends Phaser.Scene {
    constructor(){
        super('level1alt');
    }
    create(){

    }
}

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
    scene: [ Level1, Level1Alt],
}

let game = new Phaser.Game(config);