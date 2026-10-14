# 🎮 Coder E-commerce

Video game e-commerce built with **React and Firebase** as the final project of my course at **Coderhouse**.

🔗 **Live demo:** [coder-ecommerce-lemon.vercel.app](https://coder-ecommerce-lemon.vercel.app)

## ✨ Features

- Game catalog loaded from **Firestore**, with **search**, **categories** and **pagination**
- Product detail page with a quantity counter
- Shopping cart managed with **React Context**
- User **sign-up and login** with Firebase Authentication
- **Checkout** flow; purchases saved in **Firestore**
- Email validation on sign-up
- Custom hooks for games, cart, forms, login and pagination

## 🛠️ Tech stack

React · Firebase (Auth + Firestore) · Context API · React Router · React Bootstrap · Axios

## 🚀 Run locally

```bash
git clone https://github.com/leandrobattocchio/coder-ecommerce.git
cd coder-ecommerce
npm install
```

Create a `.env` file with your Firebase config:

```env
API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGE_SENDER_ID=
APP_ID=
```

```bash
npm start
```

---

Made by [Leandro Battocchio](https://leandrobattocchio.github.io) · [LinkedIn](https://www.linkedin.com/in/leandro-battocchio/)
