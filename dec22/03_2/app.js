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
    var lines = data.split('\n');
    for (var x = 0; x < lines.length; x += 3) {
      // asume all item count in every rucksack is even
      rucksacks1 = lines[x];
      rucksacks2 = lines[x + 1];
      rucksacks3 = lines[x + 2];
      var hashMapItems1 = new Map();
      var hashMapItems2 = new Map();

      for (let x of rucksacks1) {
        hashMapItems1.set(x, 1);
      }
      for (let x of rucksacks2) {
        hashMapItems2.set(x, 1);
      }
      for (let x of rucksacks3) {
        if (hashMapItems1.get(x) && hashMapItems2.get(x)) {
          total += encodeLetters(x);
          break;
        }
      }
    };
    console.log('part one answer:', total);

  } catch (err) {
    console.log(err);
  }
}

ShowMeTheMoney();

