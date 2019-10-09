class TicTacToe {
    constructor() {
        this.board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        this.currentSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[rowIndex][columnIndex] === 0) {
            this.board[rowIndex][columnIndex] = this.currentSymbol;
            this.getWinner();

            if (this.currentSymbol === 'o') {
                this.currentSymbol = 'x';
            } else {
                this.currentSymbol = 'o'
            }
        } else {
            if (this.currentSymbol === 'o') {
                this.currentSymbol = 'o';
            } else {
                this.currentSymbol = 'x'
            }
        }
    }

    isFinished() {
        return this.winner !== null || this.isDraw() === true;
    }

    getWinner() {
        let statusFirstDiagonal;
        let statusSecondDiagonal;
        let statusRow;
        let statusColumn;

        if (!statusFirstDiagonal && !statusSecondDiagonal && !statusRow && !statusColumn) {
            for (let i = 0; i < this.board.length; i++) {

                statusRow = this.board[i].every(value => {
                    return this.board[i][0] !== 0 && value === this.board[i][0]
                });
                statusColumn = this.board.every(value => {
                    return this.board[0][i] !== 0 && value[i] === this.board[0][i];

                });
                if (statusRow === true || statusColumn === true) {
                    break;
                }
            }

            for (let j = 1, k = 2; j <= 2; j++, k--) {
                if (this.board[0][0] === 0 || this.board[0][0] !== this.board[j][j]) {
                    statusFirstDiagonal = false;
                    break;
                } else {
                    statusFirstDiagonal = true;
                }
            }

            for (let l = 1, m = 1; l <= 2; l++, m--) {
                if (this.board[0][2] === 0 || this.board[0][2] !== this.board[l][m]) {
                    statusSecondDiagonal = false;
                    break
                } else {
                    statusSecondDiagonal = true;
                }
            }
        }

        if (statusColumn || statusRow || statusSecondDiagonal || statusFirstDiagonal) {
            if (this.winner === null) {
                this.winner = this.currentSymbol;
            }
        }
        return this.winner;
    }

    noMoreTurns() {
        let statusMoves = 0;
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i].indexOf(0) === -1) {
                statusMoves++;
            }
        }

        return statusMoves === 3;
    }

    isDraw() {
        return this.winner === null && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.board[rowIndex][colIndex] !== 0) {
            return this.board[rowIndex][colIndex];
        } else {
            return null;
        }
    }
}

module.exports = TicTacToe;
