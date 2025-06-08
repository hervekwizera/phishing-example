# 🎯 Phishing Simulation Server (Educational Purpose Only)

> 🚨 **Disclaimer:** This project is built for educational and ethical hacking purposes only. It is intended to help cybersecurity students, penetration testers, and ethical hackers understand how phishing attacks are structured — so they can better protect users and systems. **Do not deploy or use this software for malicious purposes.**

---

## 📁 Project Structure

phishing-simulation/
│
├── public/ # Static HTML pages (e.g., fake login form)
│ └── index.html
│
├── api/
│ └── steal.js # POST route to "capture" credentials (simulated)
│
├── logs/
│ └── creds.txt # Stores captured email/passwords (locally)
│
├── index.js # Main server file
├── package.json
└── README.md


---

## 🚀 What It Does

This Express-based Node.js server mimics a phishing backend:

- Serves a **static phishing page** (e.g., fake login form).
- Handles form submission using `body-parser`.
- Logs email & password data to a local file (`logs/creds.txt`).
- Redirects the user to an external site after submission to appear legit.

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/phishing-simulation.git
cd phishing-simulation
npm install

📡 Run Locally
bash
Copy
Edit
npm run dev



🌐 Expose Server Using Ngrok (Optional)
To simulate public phishing behavior:


Install ngrok

Run:

bash
Copy
Edit
ngrok http 3000
You’ll get a public URL like:



lua
Copy
Edit
https://random-name.ngrok.io
Use this as your fake phishing link for testing.




🧪 How to Test
Visit http://localhost:3000 (or ngrok URL)

Enter fake credentials

Check logs/creds.txt to see captured data



🛡️ How This Helps Security Teams
This tool helps in:

Understanding phishing tactics

Creating detection patterns for phishing backends

Building training simulations for user awareness

Testing alerting systems or firewalls

📬 Sending Emails (Future Plan)
To simulate phishing campaigns, you can integrate:

Nodemailer for email automation

Email templates (HTML)

MongoDB to track email delivery/opening

🧠 Key Technologies
Node.js

Express.js

Ngrok

MongoDB (planned)

Nodemailer (planned)

🔒 Security Warning
Do not deploy publicly without legal permission

Never collect real user credentials

Only use in lab environments or for demo/training with consent

🧑‍💻 Author
Built by a student of cybersecurity, ethical hacking & Node.js backend development.

📜 License
MIT License (For Educational Use Only)


---

Would you like me to generate this file directly into your local project as text or assist you with auto-generating it with terminal commands?

I
