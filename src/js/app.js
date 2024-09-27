import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './game.js';

const game = Game;
game.start();

console.log(Game, GameSavingData, loadGame, saveGame);