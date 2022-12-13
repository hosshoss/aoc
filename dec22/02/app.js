const fs = require('fs/promises');

async function ShowMeTheMoney() {
  try {
    const data = await fs.readFile('input.txt', { encoding: 'utf8' });
    var totalScore = 0;
    data.split('\n').map(line => {
      var opponent_move = line.split(' ')[0];
      var my_move = line.split(' ')[1];
      my_move = decodeMove(my_move); 
      totalScore += calculateScore(opponent_move, my_move);
    });
    console.log('part one answer:' , totalScore);
  } catch (err) {
    console.log(err);
  }
}


//decode XYZ to ABC
function decodeMove(move) {
  switch (move) {
    case 'X':
      return 'A';
    case 'Y':
      return 'B';
    case 'Z':
      return 'C';
    default:
      return move;
  }
}

function calculateScore(appon, my) {
  // if draw
  if (appon == my)
    return 3 + getMyMovePoints(my);
  // if won  
  else if (((appon == 'A' && my == 'B') || (appon == 'B' && my == 'C') || (appon == 'C' && my == 'A')))
    return 6 + getMyMovePoints(my);
  // if lose
  else
    return 0 + getMyMovePoints(my);
}

function getMyMovePoints(my) {
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