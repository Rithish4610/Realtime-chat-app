# 🗨️ Real-Time Chat App

A real-time chat application built with **Node.js**, **Express**, **Socket.io**, and **React**.

## 📁 Project Structure

```
realtime-chat-app/
│
├── backend/
│   ├── server.js      # Express + Socket.io server
│   ├── .env           # Environment variables
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   └── App.js     # React chat component
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher) - [Download here](https://nodejs.org)
- npm (comes with Node.js)

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

   ✅ Server runs at **http://localhost:5000**

### Frontend Setup

1. Open a **new terminal** and navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```

   ✅ App opens at **http://localhost:3000**

## 🧪 Testing Real-Time Chat

1. Open **two browser tabs** at http://localhost:3000
2. Type a message in one tab
3. Message appears **instantly** in the other tab! ✨

## 🗄️ MongoDB Integration (Optional)

To persist chat messages:

1. Create a free MongoDB Atlas cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Get your connection string
3. Update `backend/.env`:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
4. Uncomment the MongoDB connection code in `server.js`

## 🛠️ Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - Socket.io
  - MongoDB + Mongoose (optional)
  - CORS
  - dotenv

- **Frontend:**
  - React
  - Socket.io-client

## 📝 License

MIT License

---

Made with ❤️ using Node.js and React
