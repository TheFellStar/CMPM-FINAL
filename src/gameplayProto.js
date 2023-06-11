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
        this.load.image('table', 'table_present.png');
        this.load.image('player', 'player.png');
    }
    create(){
        this.furniture = this.physics.add.group();

        this.bookshelf = this.add.image(1400, 150, 'bookshelf').setScale(.3);
        this.furniture.add(this.bookshelf);
        this.diningTable = this.add.image(500, 300, 'table').setScale(.35);
        this.furniture.add(this.diningTable);
        this.carpet = this.add.image(700, 600, 'carpet').setScale(.3);
        this.furniture.add(this.carpet);
        this.table = this.add.image(500, 1000, 'table').setScale(.35);
        this.furniture.add(this.table);
        this.sofa = this.add.image(900, 600, 'couch').setScale(.3);
        this.furniture.add(this.sofa);
        this.sofa.angle = 90;
        this.tv = this.add.image(100, 600, 'tv').setScale(.3);
        this.furniture.add(this.tv);
        this.chair = this.add.image(1150, 950, 'chair').setScale(.3);
        this.furniture.add(this.chair);
        this.door = this.add.image(1800, 500, 'door').setScale(.3);
        this.furniture.add(this.door);
        this.player = this.add.image(1400, 600, 'player').setScale(.3);
        this.physics.add.existing(this.player);

        cursors = this.input.keyboard.createCursorKeys();
        interact = this.input.keyboard.addKey('X');
        travel = this.input.keyboard.addKey('Z');

        interact.on('down', () => {
            if(this.physics.overlap(this.player, this.bookshelf)){

            }else if(this.physics.overlap(this.player, this.diningTable)){

            }else if(this.physics.overlap(this.player, this.chair)){

            }
        })

        travel.on('down', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('level1alt');
            })
        })
    }
    update(){
        if(cursors.up.isDown){
            this.player.body.setVelocityY(-300);
			this.player.body.setVelocityX(0);
        }else if(cursors.down.isDown){
            this.player.body.setVelocityY(300);
			this.player.body.setVelocityX(0);
        }else if(cursors.left.isDown) {
			this.player.body.setVelocityX(-300);
			this.player.body.setVelocityY(0);
		} else if(cursors.right.isDown) {
			this.player.body.setVelocityX(300);
			this.player.body.setVelocityY(0);
		} else {
			this.player.body.setVelocityX(0);
			this.player.body.setVelocityY(0);
        }

        if(this.physics.overlap(this.player, this.bookshelf)){

        }else if(this.physics.overlap(this.player, this.diningTable)){

        }else if(this.physics.overlap(this.player, this.chair)){

        }else if(this.physics.overlap(this.player, this.tv)){

        }else if(this.physics.overlap(this.player, this.door)){

        }else if(this.physics.overlap(this.player, this.carpet)){

        }else if(this.physics.overlap(this.player, this.table)){

        }else if(this.physics.overlap(this.player, this.sofa)){

        }
    }
}

class Level1Alt extends Phaser.Scene {
    constructor(){
        super('level1alt');
    }
    create(){
        travel = this.input.keyboard.addKey('Z');

        travel.on('down', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('level1alt');
            })
        })
    }
}

class Pickup extends Phaser.Scene{
    constructor(){
        super('pickup');
    }
    create(){

    }
}

class Pause extends Phaser.Scene {
    constructor(){
        super('pause');
    }
    create(){
        this.add.text(800, 50, "Game Paused").setFontSize(50);
        this.cont = this.add.text(900, 500, "Continue").setFontSize(30);
        this.cont.setInteractive();
        this.check = this.add.text(900, 600, "Check Clues").setFontSize(30);
        this.check.setInteractive();
        this.options = this.add.text(900, 700, "Options").setFontSize(30);
        this.options.setInteractive();
        this.exit = this.add.text(900, 800, "Exit").setFontSize(30);
        this.exit.setInteractive();

        this.cont.on('pointerdown', () => {
            if(paused == 1){
                this.scene.start('level1');
            }
            if(paused == 2){
                this.scene.start('level1alt');
            }
        })
        this.check.on('pointerdown', () => {
            this.scene.start('clues');
        })
        this.options.on('pointerdown', () => {
            this.scene.start('options');
        })
    }
}

class Clues extends Phaser.Scene {
    constructor(){
        super('clues');
    }
    create(){
        this.add.text(800, 500, "Clues will appear here").setFontSize(50);
        this.input.on('pointerdown', () => {
            this.scene.start('pause');
        })
    }
}

class Options extends Phaser.Scene {
    constructor(){
        super('options');
    }
    create(){
        this.add.text(800, 500, "Options will go here").setFontSize(50);
        this.input.on('pointerdown', () => {
            this.scene.start('pause');
        })
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
    scene: [ Level1, Level1Alt, Pause, Clues, Options, Pickup],
}

let game = new Phaser.Game(config);
let cursors = null;
let interact = null;
let travel = null;