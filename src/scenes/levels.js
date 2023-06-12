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

