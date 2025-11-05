// functions/loadBloo.js
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    // Load your huge script from the same folder
    const filePath = path.join(__dirname, 'Bloo.js');
    const code = fs.readFileSync(filePath, 'utf8');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'no-cache'
      },
      body: code
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Error loading Bloo.js: ' + err.message
    };
  }
};
