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
while (true) {

    var isBlack = 1;

    readline.question("next move? ", a => {
        var x = a.substring(1, a.indexOf(","));
        x = parseInt(x);
        var y = a.substring(a.indexOf(",") + 1, a.length - 1);
        y = parseInt(y);

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
        readline.close();
    });
    break;
}