const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const size = 30;
var board = new Array(size);
for (var i = 0; i < size; i++) {
    var row = new Array(size);
    for (var j = 0; j < size; j++) {
        row[j] = -1;
    }
    board[i] = row;
}

var isBlack = 1;
Omok();

function Omok() {

    readline.question("next move? ", a => {
        var x = a.substring(1, a.indexOf(","));
        x = parseInt(x) - 1;
        var y = a.substring(a.indexOf(",") + 1, a.length - 1);
        y = parseInt(y) - 1;

        if (isBlack === 1) { // Black 순서일 때
            board[x][y] = 1;
        } else {
            board[x][y] = 0;
        }

        isBlack = isBlack * (-1);

        // console.log(x + " + " + y + " = " + (x+y));

        for (var i = 0; i < size; i++) {
            var line = "|";
            for (var j = 0; j < size; j++) {
                if (board[i][j] === -1) {
                    line += " |";
                } else if (board[i][j] === 1) {
                    line += "B|";
                } else {
                    line += "W|";
                }
            }
            console.log(line);
        }
        const isGameOver = gameOver(board, size)
        if (isGameOver === "Not Over!") {
            Omok();
        } else {
            console.log(isGameOver)
            readline.close();
            return;
        }
    });
}

function gameOver(board, size) {
    for (var i = 0; i < size-5; i++) {
        for (var j = 0; j < size-5; j++) {
            if (board[i][j] === 1 && board[i+1][j] === 1 && board[i+2][j] === 1 && board[i+3][j] === 1 && board[i+4][j] === 1) {
                return "Black Win!"
            }
            if (board[i][j] === 0 && board[i+1][j] === 0 && board[i+2][j] === 0 && board[i+3][j] === 0 && board[i+4][j] === 0) {
                return "White Win!"
            }
            if (board[i][j] === 1 && board[i][j+1] === 1 && board[i][j+2] === 1 && board[i][j+3] === 1 && board[i][j+4] === 1) {
                return "Black Win!"
            }
            if (board[i][j] === 0 && board[i][j+1] === 0 && board[i][j+2] === 0 && board[i][j+3] === 0 && board[i][j+4] === 0) {
                return "White Win!"
            }
            if (board[i][j] === 1 && board[i+1][j+1] === 1 && board[i+2][j+2] === 1 && board[i+3][j+3] === 1 && board[i+4][j+4] === 1) {
                return "Black Win!"
            }
            if (board[i][j] === 0 && board[i+1][j+1] === 0 && board[i+2][j+2] === 0 && board[i+3][j+3] === 0 && board[i+4][j+4] === 0) {
                return "White Win!"
            }
        }
    }
    return "Not Over!"
}