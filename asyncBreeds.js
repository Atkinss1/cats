// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, `utf-8`, (error, data) => {
    console.log(`In readFile's Callback: it has the data.`);
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      callback(data);
    } else callback(undefined);
  });
  // ISSUE: Attempting to return data out here will also not work..
  //      Currently not returning anything from here, so breedDetailsFromFile function returns undefinded.
};
module.exports = breedDetailsFromFile;