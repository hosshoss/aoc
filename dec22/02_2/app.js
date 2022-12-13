const fs = require('fs/promises');

async function ShowMeTheMoney() {
    try {
        const data = await fs.readFile('input.txt', { encoding: 'utf8' });
        var totalScore = 0;
        data.split('\n').map(line => {
            var opponent_move = line.split(' ')[0];
            var my_move = line.split(' ')[1];
            var stepScore = 0;
            var decoded_my_move = decodeMove(opponent_move, my_move);
            stepScore = calculateScore(opponent_move, decoded_my_move);
            console.log(opponent_move, my_move, decoded_my_move, stepScore);
            totalScore += stepScore;
        });
        console.log(totalScore);
    } catch (err) {
        console.log(err);
    }
}

function decodeMove(appon, move) {
    switch (move) {
        case 'X':
            {
                if (appon == 'A')
                    return 'C';
                if (appon == 'B')
                    return 'A';
                if (appon == 'C')
                    return 'B';
            }
        case 'Y':
            {
                return appon;
            }
        case 'Z':
            {
                if (appon == 'A')
                    return 'B';
                if (appon == 'B')
                    return 'C';
                if (appon == 'C')
                    return 'A';
            }
        default:
            return move;
    }
}

function calculateScore(appon, my) {
    if (appon == my)
        return 3 + getmyMovePoints(my);
    else if (((appon == 'A' && my == 'B') || (appon == 'B' && my == 'C') || (appon == 'C' && my == 'A')))
        return 6 + getmyMovePoints(my);
    else
        return 0 + getmyMovePoints(my);
}

function getmyMovePoints(my) {
    switch (my) {
        case 'A':
            return 1;
        case 'B':
            return 2;
        case 'C':
            return 3;
        default:
            return 0;
    }
}


ShowMeTheMoney();