
# 📚  Bookstore Management System Mern Project

Welcome to the **Bookstore Management System Mern Project**, a full-stack e-commerce application built from scratch using the MERN stack. It offers users the ability to browse, order, and manage books online while giving admins full control over inventory and orders through a secure dashboard.

---

## 🚀 Technologies Used

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Frontend     | React.js, Tailwind CSS, Redux Toolkit, RTK Query |
| Backend      | Node.js, Express.js               |
| Database     | MongoDB (via Mongoose)            |
| Auth         | JWT (JSON Web Tokens)             |

---

## ✨ Key Features

### 👤 User Features
- Browse books with detailed view
- Add or remove books from cart
- Checkout using Cash on Delivery
- Place and track orders(not yet implemented)

### 🛠️ Admin Features
- Secure admin login with JWT
- Add, update, and delete book entries
- View and manage all orders
- Track real-time inventory(not implemented yet)

---

## 📁 Folder Structure

```

book-store-mern-project/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── books/
│   │   │   ├── book.controller.js
│   │   │   ├── book.model.js
│   │   │   └── book.route.js
│   │   ├── orders/
│   │   │   ├── order.controller.js
│   │   │   ├── order.model.js
│   │   │   └── order.route.js
│   │   ├── users/
│   │   └── middleware/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── firebase/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── routers/
│   │   └── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── .env.local
│   ├── index.html
│   ├── tailwind.config.cjs
│   ├── vite.config.js
│   ├── postcss.config.js
│   ├── eslint.config.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md


````

---

## 🧑‍💻 Build & Setup Instructions

### 🔧 Backend Setup

```terminal
cd backend/
npm install
npm run  start:dev
````

🔐 Create a `.env` file in the backend folder:

```
MONGO_URI=DB_URL="mongodb+srv://sanjinafrindristy:MJNHDZVXcKMwxbCm@cluster0.jd6ud8r.mongodb.net/book-store?retryWrites=true&w=majority&appName=Cluster0"

```

### 🌐 Frontend Setup

```terminal
cd frontend/
npm install
npm run dev
```

> ✅ Make sure  backend is running before starting the frontend.

---

## 📘 User Manual

### For Users

1. Visit the homepage to browse books
2. Click any book to see its details
3. Add desired books to  cart
4. Proceed to checkout and place the order

### For Admins

1. Login via secure admin credentials
2. Access the dashboard
3. Upload new books
4. Edit or delete books as needed
5. View and manage customer orders

---


## 📌 Future Enhancements

* 💳 Online payment integration (e.g., Stripe, SSLCommerz)
* 🔎 Advanced search and filtering
* 📈 Sales and inventory reports
* 📧 Email notifications on order placement
* 🌟 User reviews and star ratings
* 🌐 Multi-language support (e.g., Bangla/English)

---

## ✅ Conclusion

This MERN-based bookstore project is a scalable and extensible platform for online book retail. With a clean UI, robust backend, and secure admin system, it serves as a practical foundation for real-world e-commerce applications.

> ⭐ **Thank you for checking out this project! **

```


