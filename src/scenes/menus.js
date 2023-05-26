class Test extends Phaser.Scene {
    constructor(){
        super('test');
    }
    create(){
        this.add.text(200, 200, "This is our deployed game").setFontSize(100);
    }
}