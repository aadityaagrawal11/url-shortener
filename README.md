# url-shortener
A simple and efficient URL shortening service built with Node.js, Express, Sequelize ORM, and MySQL. This application allows users to convert long URLs into short, shareable aliases and handles redirection to the original URLs.

# 🚀 Features

🔗 Shorten any long URL into a compact 6-character code

🔁 Redirect short URLs to the original destination

🔍 Avoids duplicate short codes for the same URL

💾 Stores data persistently using MySQL via Sequelize ORM

📦 Built with modular ES Modules (ESM)

🧪 Easy to test with Postman or curl

# 🧰 Tech Stack
1) Node.js – Runtime
2) Express.js – Web framework
3) MySQL – Relational database
4) Sequelize – ORM for database interaction
5) NanoID – For generating short, unique URL codes
6) ES Modules – Modern import/export syntax

# 📁 Folder Structure
url-shortener/ <br />
├── db.js                  # Sequelize DB connection <br />
├── index.js               # Main application entry point <br />
├── models/ <br />
│   └── Url.js             # Sequelize model for URLs <br />
├── package.json <br />

