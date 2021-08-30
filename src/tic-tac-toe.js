const first_player = 'x';
const second_player = 'o';
const next_player = {
    [first_player]: second_player,
    [second_player]: first_player,
};
class TicTacToe {
    constructor() {

    }
    gameField = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    currentPlayer = first_player;


    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] !== null) {
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = next_player[this.currentPlayer];
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw();
    }

    getWinner() {
        for (let i = 0; i < this.gameField.length; i++) {
            let distinct = [...new Set(this.gameField[i])];
            if (distinct.length == 1 && distinct[0] !== null) {
                return distinct[0];
            }
        }
        for (let i = 0; i < this.gameField.length; i++) {
            let someEls = [];
            for (let j = 0; j < this.gameField[i].length; j++) {
                someEls.push(this.gameField[j][i])
            }
            let unicate = [...new Set(someEls)];
            if (unicate.length == 1 && unicate[0] !== null) {
                return unicate[0];
            }
        }
        let mainAx = [];
        for (let i = 0; i < this.gameField.length; i++) {
            mainAx.push(this.gameField[i][i]);
        }
        mainAx = [...new Set(mainAx)];
        if (mainAx.length == 1 && mainAx[0] !== null) {
            return mainAx[0];
        }
        let secondAx = [];
        for (let i = 0; i < this.gameField.length; i++) {
            let j = this.gameField.length - 1 - i;
            secondAx.push(this.gameField[i][j])
        }
        secondAx = [...new Set(secondAx)];
        if (secondAx.length == 1 && secondAx[0] !== null) {
            return secondAx[0];
        }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.gameField.length; i++) {
            for (let j = 0; j < this.gameField[i].length; j++)
                if (this.gameField[i][j] === null) {
                    return false;
                }
        }
        return true;
    }

    isDraw() {
        return  this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;