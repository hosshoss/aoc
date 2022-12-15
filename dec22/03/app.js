const fs = require('fs/promises');

function encodeLetters(letter) {
  //get ascii code for the letter
  let code = letter.charCodeAt(0);
  if (code >= 97) // if letter is lower
    return code - 96;
  else
    return code - 38;
}

async function ShowMeTheMoney() {
  try {
    const data = await fs.readFile('input.txt', { encoding: 'utf8' });
    var total = 0;
    data.split('\n').map(line => {
      // asume all item count in every rucksack is even
      var comp1 = line.substring(0, line.length / 2);
      var comp2 = line.substring(line.length / 2, line.length);
      var mapHash1 = new Map();
      var mapHash2 = new Map();
      for (let i = 0; i < comp1.length; i++) {
        mapHash1.set(comp1[i], 1);
      }

      for (let i = 0; i < comp2.length; i++) {
        mapHash2.set(comp2[i], 1);
      }

      for (const [key, value] of mapHash1) {
        if (mapHash2.get(key))
          total += encodeLetters(key);
      }

    });
    console.log('part one answer:', total);

  } catch (err) {
    console.log(err);
  }
}

ShowMeTheMoney();