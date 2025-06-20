# 📝 BlogSphere - MERN Blogging Platform

BlogSphere is a full-stack modern blogging platform built using the MERN (MongoDB, Express, React, Node.js) stack. It provides a clean and user-friendly interface for writing, reading, and managing blogs. Built with security and scalability in mind, BlogSphere allows users to explore content, manage their personal blog space, and interact with others in a seamless environment.

---

## 🚀 Features

- 🔐 **Authentication**
  - User registration and login using JWT (JSON Web Token)
  - Passwords stored securely using bcrypt hashing
  - Authentication via HTTP-only signed cookies
  - OTP-based password reset flow via email

- 📝 **Blog Management**
  - Create, update, and delete blogs (only by the author)
  - Image upload for blogs using Multer and Cloudinary

- 🌍 **Explore Blogs**
  - Browse blogs by all users with pagination
  - View detailed blog posts with likes, comments, and author info

- 💬 **Commenting System**
  - Add, delete, and view comments on blogs
  - Authenticated user-based control

- 📦 **Media Upload**
  - Temporary storage using Multer
  - Permanent storage on Cloudinary CDN

- 🔐 **Security**
  - Authentication middleware
  - Input client side validation using yup library
  - Role-based access controls (optional)
  - Helmet for securing HTTP headers
  - Rate limiting for APIs (basic protection against brute-force attacks)

---

## 🛠️ Tech Stack

### 🔧 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- Bcrypt.js for password hashing
- Multer for image handling
- Cloudinary for image hosting

### 🌐 Frontend (if included)
- React.js (optional in this repo)
- React Router Dom
- Axios for HTTP requests
