const fs = require('fs/promises');
const { start } = require('repl');

async function ShowMeTheMoney() {
  try {
    const data = await fs.readFile('input.txt', { encoding: 'utf8' });
    var total = 0;
    data.split('\n').map(line => {
      var parts = line.split(',');
      if(checkIfPairsOverLapping(parts) || checkIfPairsFullyContained(parts))
        total++;

    });
    console.log('part two answer:' , total);
  } catch (err) {
    console.log(err);
  }
}

function checkIfPairsOverLapping(parts){
  var start1 = parseInt(parts[0].split('-')[0]);
  var end1 = parseInt(parts[0].split('-')[1]);
  var start2 = parseInt(parts[1].split('-')[0]);
  var end2 = parseInt(parts[1].split('-')[1]);
  if((start2 >= start1 && start2 <= end1) || (end2>= start1 && end2 <= end1))
    return true
  return false;  
}

function checkIfPairsFullyContained(parts){
  var start1 = parseInt(parts[0].split('-')[0]);
  var end1 = parseInt(parts[0].split('-')[1]);
  var start2 = parseInt(parts[1].split('-')[0]);
  var end2 = parseInt(parts[1].split('-')[1]);
  if((start1 <= start2 && end1 >= end2) || (start2<= start1 && end2 >= end1))
    return true
  return false;  
}

ShowMeTheMoney();