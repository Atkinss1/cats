// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('# 1 --->   breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, `utf-8`, (error, data) => {
    console.log(`# 3 --->   In readFile's Callback: it has the data.`);
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callback(data);

  });
  // ISSUE: Attempting to return data out here will also not work..
  //      Currently not returning anything from here, so breedDetailsFromFile function returns undefinded.
};


// we can try to get the return value.
const bombay = breedDetailsFromFile('Bombay', (data) => {
  console.log(data);
});
console.log('Return value: #2 --->   ', bombay); // => will NOT print out details, instead we will see undefined.