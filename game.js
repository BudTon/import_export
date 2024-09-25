const Character = require('./domain.js').defaultCharacter

class Game {
    start() {
        console.log('game started');
    }
}
const defaultGame = new Game();


class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

module.exports = {
    defaultGame,
    GameSavingData,
    loadGame: readGameSaving,
    saveGame: writeGameSaving,
}

