class Tank{
    constructor(name, hp, attack, source){
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.imgSource = source;
    }
}
const player1 = new Tank('Boulder', 100, 5, 'tank_right.png');
const player2 = new Tank('Crusher', 100, 5, 'tank_left.png');

document.getElementById('player1').innerHTML = `${player1.name}`;
document.getElementById('player2').innerHTML = `${player2.name}`;
document.getElementById('tankRight').innerHTML = `<img id="t1" class="tank" src='${player1.imgSource}'/>`;
document.getElementById('tankLeft').innerHTML = `<img id="t2" class="tank" src='${player2.imgSource}'/>`;
document.getElementById('health-1').innerHTML = `${player1.hp}`;
document.getElementById('health-2').innerHTML = `${player2.hp}`;

function player1Att(){
    player2.hp -= player1.attack; 
    document.getElementById('health-2').innerHTML = `${player2.hp}`;
    var img1 = document.getElementById("t2");
    img1.style.opacity = player2.hp / 100;
    if(player2.hp <= 0){
        document.getElementById('message').innerHTML = `<h1>GAME OVER</h1><h2>${player1.name} WINS!</h2>`;
        document.getElementById('status').innerHTML = `<button type="button" onclick="window.location.reload();" id="reset" value="reset" class="btn btn-primary">PLAY AGAIN</button>`;
    }else{
        document.getElementById('message').innerHTML = `<h1>${player1.name} has attacked!</h1>`;
    }
}
function player2Att(){
    player1.hp -= player2.attack; 
    document.getElementById('health-1').innerHTML = `${player1.hp}`;
    var img2 = document.getElementById("t1");
    img2.style.opacity = player1.hp / 100;
    if(player1.hp <= 0){
        document.getElementById('message').innerHTML = `<h1>GAME OVER</h1><h2>${player2.name} WINS!</h2>`;
        document.getElementById('status').innerHTML = `<button type="button" onclick="window.location.reload();" id="reset" value="reset" class="btn btn-primary">PLAY AGAIN</button>`;
    }else{
        document.getElementById('message').innerHTML = `<h1>${player2.name} has attacked!</h1>`;
    }
}