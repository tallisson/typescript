"use strict";
var tlou = {
    title: 'The Last of Us',
    description: 'The best game in the world',
    genre: 'Action',
    plataform: ['PS3', 'PS4'],
    getSimilars: function (title) {
        console.log("Similars games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var leftbehind = {
    title: 'The Last of US - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    originalGame: tlou,
    newContent: ['3 hours of story', 'new characters']
};
console.log(leftbehind.genre);
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
