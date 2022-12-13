const fs = require('fs/promises');

async function ShowMeTheMoney() {
  try {
    const data = await fs.readFile('input.txt', { encoding: 'utf8' });
    var result = [];
    var temp = 0;
    data.split('\n').map(Number => {
      intNumber = parseInt(Number);
      if (intNumber) {
        temp += intNumber;
      } else { // one elf done
        result.push(temp);
        temp = 0;
      }
    });
    result.sort();
    temp = 0;
    //loop on last 3 elfs
    for (var i = 1; i <= 3; i++) {
      temp += result[result.length - i];
    }
      console.log('part two answer = ', temp); 
  } catch (err) {
    console.log(err);
  }
}

ShowMeTheMoney();
