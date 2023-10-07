const fs = require('fs');

// Read the input JSON file
fs.readFile('./src/i18n/en.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input file:', err);
    return;
  }

  try {
    // Parse the JSON data as an object
    const jsonData = JSON.parse(data);

    // Create an empty object to store the modified data
    const modifiedData = {};

    // Loop through each key in the object and extract the "defaultMessage"
    for (const key in jsonData) {
      if (jsonData.hasOwnProperty(key)) {
        modifiedData[key] = jsonData[key].defaultMessage;
      }
    }

    // Convert the modified data back to JSON format
    const modifiedJson = JSON.stringify(modifiedData, null, 2);

    // Write the modified JSON data to a new file
    fs.writeFile('./src/i18n/en.json', modifiedJson, 'utf8', (err) => {
      if (err) {
        console.error('Error writing output file:', err);
      } else {
        console.log('Output file saved as output.json');
      }
    });
  } catch (err) {
    console.error('Error parsing input JSON:', err);
  }
});
