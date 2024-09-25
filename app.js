const app = require('./game.js')
// Вариант 1
// const GameSavingData = app.GameSavingData;
// const loadGame = app.loadGame;
// const saveGame = app.saveGame;

// Вариант 2
// const { defaultGame } = app;
// const { loadGame } = app;
// const { saveGame } = app;

// Вариант 3
const { defaultGame, GameSavingData, loadGame, saveGame } = app;

// Вариант 1
// const game = app.defaultGame;
// game.start();

// Вариант 2
defaultGame.start();

console.log(GameSavingData);
console.log(loadGame);
console.log(saveGame);

