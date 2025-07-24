# 📚 BookStore Web Application (MERN Stack)

This is a full-stack BookStore web application built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js).

## ✨ Features

- 👤 User registration and login  
- 📚 Browse and view available books  
- 🛒 Users can manage and interact with books  
- 🛠️ Admin functionality:  
  - Add new books  
  - Edit existing books  
  - Delete books  

## 🧰 Tech Stack

### 🔹 Frontend:
- React.js  
- Axios  
- React Router DOM  

### 🔹 Backend:
- Node.js  
- Express.js  
- MongoDB (via Mongoose)  

### 🔐 Authentication:
- JSON Web Tokens (JWT)  

---

## 🚀 Getting Started

### 📦 Clone the Repository
```bash
git clone https://github.com/suhani1903/Book_Store_Website.git
cd Book_Store_Website
```

### 📁 Install Dependencies

#### 🔸 Backend
```bash
cd Backend
npm install
```

#### 🔸 Frontend
```bash
cd ../Frontend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `Backend` directory with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🖥️ Running the App

### ▶️ Start Backend Server

```bash
cd Backend
npm start
```

### ▶️ Start Frontend Server

```bash
cd ../Frontend
npm start
```

---
