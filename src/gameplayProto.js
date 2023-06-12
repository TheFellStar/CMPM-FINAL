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
        this.load.audio('background', 'Serge Quadrado - Suspense Piano.mp3')
    }
    create(){
        let backgroundMusic = this.sound.add('background');
        backgroundMusic.loop = true;
        if(playing == false){
            backgroundMusic.play();
        }
        
        this.add.text(50,50, "Press 'X' to interact with objects").setFontSize(30);

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
        this.tv = this.add.image(125, 600, 'tv').setScale(.3);
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
                if(clueArr.indexOf("clue1")==-1){
                    clueArr.push("clue1");
                }
                clueArr.push("clue1");
                display = 1;
                this.scene.pause('level1');
                this.scene.launch('pickup');
            }else if(this.physics.overlap(this.player, this.diningTable)){
                if(clueArr.indexOf("clue2")==-1){
                    clueArr.push("clue2");
                }
                display = 2;
                this.scene.pause('level1');
                this.scene.launch('pickup');
            }else if(this.physics.overlap(this.player, this.chair)){
                if(clueArr.indexOf("clue3")==-1){
                    clueArr.push("clue3");
                }
                display = 3;
                this.scene.pause('level1');
                this.scene.launch('pickup');
            }else if(this.physics.overlap(this.player, this.door) && clueArr.length >= 6){
                this.scene.start('end');
            }
        })

        travel.on('down', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('level1alt');
            })
        })

        pmenu = this.input.keyboard.addKey('P');
        paused = 1;
        pmenu.on('down', () => this.scene.start('pause'));
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
    preload(){
        this.load.path = './assets/';
        this.load.image('bedp', 'bed_past.png');
        this.load.image('bookshelfp', 'bookshelf_past.png');
        this.load.image('carpetp', 'carpet_past.png');
        this.load.image('chairp', 'chair_past.png');
        this.load.image('doorp', 'door_past.png');
        this.load.image('sofa', 'sofa_past.png');
        this.load.image('tablep', 'table_past.png');
        this.load.image('tvp', 'tv_past.png');
        this.load.image('player', 'player.png');
    }
    create(){
        this.furniture = this.physics.add.group();

        this.bookshelf = this.add.image(1400, 150, 'bookshelfp').setScale(.3);
        this.furniture.add(this.bookshelf);
        this.diningTable = this.add.image(500, 300, 'tablep').setScale(.35);
        this.furniture.add(this.diningTable);
        this.carpet = this.add.image(700, 600, 'carpetp').setScale(.3);
        this.furniture.add(this.carpet);
        this.table = this.add.image(500, 1000, 'tablep').setScale(.35);
        this.furniture.add(this.table);
        this.sofa = this.add.image(900, 600, 'sofa').setScale(.3);
        this.furniture.add(this.sofa);
        this.sofa.angle = 90;
        this.tv = this.add.image(125, 600, 'tvp').setScale(.3);
        this.furniture.add(this.tv);
        this.chair = this.add.image(1150, 950, 'chairp').setScale(.3);
        this.furniture.add(this.chair);
        this.door = this.add.image(1800, 500, 'doorp').setScale(.3);
        this.furniture.add(this.door);
        this.player = this.add.image(1400, 600, 'player').setScale(.3);
        this.physics.add.existing(this.player);

        cursors = this.input.keyboard.createCursorKeys();
        travel = this.input.keyboard.addKey('Z');
        interact = this.input.keyboard.addKey('X');

        interact.on('down', () => {
            if(this.physics.overlap(this.player, this.tv)){
                if(clueArr.indexOf("clue4")==-1){
                    clueArr.push("clue4");
                }
                display = 4;
                this.scene.pause('level1alt');
                this.scene.launch('pickup');
            }else if(this.physics.overlap(this.player, this.table)){
                if(clueArr.indexOf("clue5")==-1){
                    clueArr.push("clue5");
                }
                display = 5;
                this.scene.pause('level1alt');
                this.scene.launch('pickup');
            }else if(this.physics.overlap(this.player, this.carpet)){
                if(clueArr.indexOf("clue6")==-1){
                    clueArr.push("clue6");
                }
                display = 6;
                this.scene.pause('level1alt');
                this.scene.launch('pickup');
            }
        })

        travel.on('down', () => {
            this.cameras.main.fadeOut(1000, 0, 0,0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>{
                this.scene.start('level1');
            })
        })

        pmenu = this.input.keyboard.addKey('P');
        paused = 2;
        pmenu.on('down', () => this.scene.start('pause'));
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
    }
}

class Pickup extends Phaser.Scene{
    constructor(){
        super('pickup');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('contacts', 'contacts_list.png');
        this.load.image('diary', 'diary_past.png');
        this.load.image('notecard', 'notecard.png');
        this.load.audio('paper', 'paper sound.mp3');
    }
    create(){
        let papsound = this.sound.add('paper');
        papsound.play();
        if(display == 1){
            this.add.image(1000, 500, 'notecard').setScale(1.5);
            this.add.text(800, 500, "This is a clue", {color: "#000000"}).setFontSize(50);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1');
            })
        }
        if(display == 2){
            this.add.image(1000, 500, 'contacts').setScale(1);
            this.add.text(700, 500, "Find all to continue", {color: "#000000"}).setFontSize(50);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1');
            })
        }
        if(display == 3){
            this.add.image(1000, 500, 'notecard').setScale(1.5);
            this.add.text(650, 500, "Press 'Z' to travel to the past", {color: "#000000"}).setFontSize(40);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1');
            })
        }
        if(display == 4){
            this.add.image(1000, 500, 'notecard').setScale(1.5);
            this.add.text(700, 500, "Try", {color: "#000000"}).setFontSize(50);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1alt');
            })
        }
        if(display == 5){
            this.add.image(1000, 500, 'contacts').setScale(1);
            this.add.text(850, 400, "Present", {color: "#000000"}).setFontSize(50);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1alt');
            })
        }
        if(display == 6){
            this.add.image(1000, 500, 'diary').setScale(1);
            this.add.text(700, 500, "Door", {color: "#000000"}).setFontSize(50);
            this.input.on('pointerdown', () => {
                this.scene.stop('pickup');
                this.scene.resume('level1alt');
            })
        }
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

class End extends Phaser.Scene{
    constructor(){
        super('end');
    }
    create(){
        this.add.text(800, 500, "Well done!").setFontSize(50);
        this.input.on('pointerdown', () => {
            this.scene.start('level1');
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
    scene: [ Level1, Level1Alt, Pause, Clues, Options, Pickup, End],
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