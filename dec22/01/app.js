const fs = require('fs/promises');

async function ShowMeTheMoney() {
  try {
    const data = await fs.readFile('input.txt', { encoding: 'utf8' });
    var max = 0;
    var temp =0;
    data.split('\n').map(Number => {
        intNumber = parseInt(Number);
        if(intNumber) {        
            temp+= intNumber;
        } else {
            max=Math.max(max,temp);
            temp=0;
        }
      });
      console.log(max);
} catch (err) {
    console.log(err);
  }
}


ShowMeTheMoney();