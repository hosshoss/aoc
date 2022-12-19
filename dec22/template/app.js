const fs = require('fs/promises');

async function ShowMeTheMoney() {
  try {
    const data = await fs.readFile('input.txt', { encoding: 'utf8' });
    data.split('\n').map(line => {
      console.log(line);
    });
    console.log('part one answer:' , '');
  } catch (err) {
    console.log(err);
  }
}

ShowMeTheMoney();