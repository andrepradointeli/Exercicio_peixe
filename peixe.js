var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

var tuba

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    //carregar o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carregar o peixe
    this.load.image('tubarao', 'assets/peixes/tubarao.png');

    this.load.image('concha', 'assets/concha.png')
}

function create() {
    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo').setScale(0.5);

    this.add.image(250, 525, 'concha');

    this.add.image(550, 525, 'concha')

    tuba = this.add.image(400, 300, 'tubarao')
    tuba.setFlip(true, false);
}

function update() {

    tuba.x = this.input.x;
    tuba.y = this.input.y;
    
}