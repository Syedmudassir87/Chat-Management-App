## Chat Management App

A simple chat management web application built using Node.js, Express.js, MongoDB, and EJS.

## Features

- View all chats
- Create new chats
- Edit existing chat messages
- Update chat details
- Delete chats
- Store chat data in MongoDB
- Display chat information using EJS templates

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- HTML
- CSS
- Method-Override

## Project Structure

MONGO/
├── models/
│   └── chat.js
├── public/
│   └── style.css
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
├── index.js
├── init.js
├── package.json
├── package-lock.json
└── README.md

## Installation and Setup

1. Clone the repository:
   
   git clone https://github.com/Syedmudassir87/Chat-Management-App.git

2. Open the project folder:
   
   cd Chat-Management-App

3. Install dependencies:
   
   npm install

4. Make sure MongoDB is running locally.

5. Start the application:
   
   node index.js

6. Open your browser:
   
   http://localhost:8080/chats

## Database

The application uses MongoDB with a database named "Whatsapp" to store chat records.

Each chat includes:

- "from" — sender
- "to" — receiver
- "msg" — chat message
- "created_at" — date and time

## Learning Outcomes

This project demonstrates CRUD operations, Express routing, MongoDB integration with Mongoose, EJS templating, and HTTP method handling.

Created as a web development learning project.
