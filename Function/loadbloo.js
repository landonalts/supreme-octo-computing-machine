// functions/loadBloo.js
import fs from 'fs';
import path from 'path';

export async function handler() {
  const filePath = path.join(process.cwd(), 'Bloo.js');
  const code = fs.readFileSync(filePath, 'utf8');

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/javascript' },
    body: code
  };
}
