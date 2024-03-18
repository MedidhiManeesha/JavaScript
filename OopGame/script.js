// Create a constructor to create a Player object with a name
// Player should have a 'name' as well as a lvl set to 1 by default and 'points' set to 0 by default
function Player(name){
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

// Create a method on the prototype called 'gainXp' that takes in a number from 1 - 10 and adds it to the players 'points'. If the current 'points' are >= 10 then add 1 to the 'lvl' and decrement the points by 10

Player.prototype.gainXp = function(xp){
    this.points += xp;

    if(this.points >=10){
        this.lvl++;
        this.points -= 10;
    }
    console.log(this.describe());
}
// Create another prototype method called describe that displays the players stats (name, lvl, points)

Player.prototype.describe = function(){
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`
}

const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXp(4);
player2.gainXp(7);



