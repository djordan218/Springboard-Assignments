const fs = require('fs');
const process = require('process');
const axios = require('axios');

// node urls.js urls.txt
// process.argv[2] = urls.txt
let path = process.argv[2];

// reading the file, printing error if there is one, sending to write url file
function readFile(path) {
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      console.log(data);
      readAndWrite(data);
    }
  });
}

readFile(path);

// creating file and writing urls's html
async function readAndWrite(data) {
  const array = data.toString().split('\n');
  for (url in array) {
    try {
      let res = await axios.get(array[url]);
      fileName = res.request.socket._host;
      fs.writeFileSync(fileName, res.data, 'utf8', function (err) {
        if (err) {
          console.error(`Couldn't create file of ${array[url]}`);
        }
      });
    } catch (err) {
      console.log(`Error fetching ${array[url]}: ${err}`);
    }
  }
}
