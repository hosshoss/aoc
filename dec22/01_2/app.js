const fs = require('fs/promises');

async function ShowMeTheMoney() {
  try {
    const data = await fs.readFile('input.txt', { encoding: 'utf8' });
    var result = [];
    var temp =0;
    data.split('\n').map(Number => {
        intNumber = parseInt(Number);
        if(intNumber) {
                      temp+= intNumber;
        } else {
            result.push(temp);
            temp = 0;
        }
      });
      result.sort();
      temp = 0;
      for(var i=1; i<= 3;i++){
        temp+=result[result.length - i];
        console.log(i + " >> " + result[result.length - i]);
      }
      console.log(temp);
} catch (err) {
    console.log(err);
  }
}

ShowMeTheMoney();