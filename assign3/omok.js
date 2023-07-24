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

    var answer = "";
    readline.question("next move?", a => {
        answer += a;
        for (var i = 0; i < size; i++) {
            var line = "|";
            for (var j = 0; j < size; j++) {
                if (board[i][j] === -1) {
                    line += " |";
                } else {
                    line += board[i][j] + "|";
                }
            }
            // console.log(line);
        }
        readline.close();
    });
    break;
}