let board=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

let p1counter =1;
let p2counter =1;

class Player{
    constructor(id){
        this.isTurn= false;
        this.win= false;
    }
}

class Space{
    constructor(id){
        this.played= false;
        this.id=id;

    }
    addSymbolX(space){
        $(space).append("<div class='x'>X</div>");
    }
    addSymbolO(space){
        $(space).append("<div class='0'>O</div>");

    }
}

const player1 = new Player();
const player2 = new Player();

const space1 = new Space('one');
const space2 = new Space('two');
const space3 = new Space('three');
const space4 = new Space('four');
const space5 = new Space('five');
const space6 = new Space('six');
const space7 = new Space('seven');
const space8 = new Space('eight');
const space9 = new Space('nine');

function switchTurns(one, two){
    one.isTurn = true;
    two.isTurn = false;
}

