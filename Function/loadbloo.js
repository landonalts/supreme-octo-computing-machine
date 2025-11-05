const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    const filePath = path.join(__dirname, 'Bloo.js'); // inside functions folder
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
