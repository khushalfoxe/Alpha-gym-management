# 🏋️ Alpha Gym Management System

A web-based Gym Management System developed using **HTML, CSS, JavaScript, and Firebase**.

This project digitizes gym operations such as billing, member management, notifications, and revenue tracking.

---

## 📌 Project Overview

Traditional gyms rely on paper receipts and manual record-keeping.  
This system provides a **digital solution** to:

- Store receipts securely
- Track revenue automatically
- Manage members efficiently
- Send notifications
- Assign diet & packages
- View monthly analytics

---

## 🚀 Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES Modules)
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth
- **Analytics:** Chart.js
- **Hosting:** GitHub / Firebase Hosting

---

## 🔐 Login Credentials (Testing)

### 👨‍💼 Admin Login
- **Email:** `alpha@gmail.com`
- **Password:** `9560659600`

### 👤 Member Login
- **Email:** `member1@gmail.com`
- **Password:** `9560659600`

---

## 🧠 Role-Based Access

- Admin pages are protected
- Members cannot access admin dashboard
- Role validation is done via email verification
- Unauthorized users are redirected

---

## 📂 System Modules

### 🔹 Admin Panel
- Add Member
- Update/Delete Member
- Create Bills
- Assign Fee Packages
- Send Notifications
- Monthly Report (Revenue Analytics)
- Supplement Store
- Diet Plan Management

### 🔹 Member Panel
- View Profile
- View Bills
- Pay Bills
- View Notifications
- View Diet Plan
- View Supplements

---

## 💵 Billing System Logic

1. Admin creates bill → status = `unpaid`
2. Member logs in and clicks `Pay`
3. Bill status updates to `paid`
4. Monthly report counts **only paid bills**
5. Revenue is calculated accurately

---

## 📊 Revenue Analytics

- Monthly filtering
- Paid bills only
- Bar chart visualization
- Total members count
- Paid bills count
- Total revenue display

---

## 🗄️ Firestore Database Structure

### `members`
- name
- email
- phone

### `bills`
- memberId
- memberName
- amount
- month
- date
- status (paid/unpaid)
- createdAt
- paidAt

### `assignedPackages`
- memberId
- packageName
- duration
- price

### `notifications`
- memberId
- message

### `dietPlans`
- memberId
- dietText

### `supplements`
- name
- price
- description

---

## 🧪 Testing Procedure

1. Login as Admin
2. Create a bill for member
3. Logout and login as Member
4. Click Pay on unpaid bill
5. Logout and login as Admin
6. Open Monthly Report
7. Verify revenue reflects paid bill

---

## 🔒 Security Measures

- Firebase Authentication
- Admin-only page protection
- Role-based access validation
- Firestore rules configuration

---

## 📱 Responsive Design

- Mobile Friendly
- Tablet Compatible
- Desktop Optimized
- Glassmorphism UI (Member Panel)

---

## ⚙️ How to Run Locally

1. Clone repository
2. Open project folder
3. Open `admin.html` or `index.html`
4. Ensure Firebase config is valid
5. Use provided credentials

---

## 🌍 Deployment

This project can be hosted on:

- GitHub Pages
- Firebase Hosting
- Any static hosting service

---

## 📈 Future Enhancements

- Online payment gateway integration
- Attendance tracking
- PDF receipt generation
- Mobile app (PWA)
- Role-based admin hierarchy
- Advanced analytics dashboard

---

## 🎓 Project Type

- Academic Project
- Internship Project
- Full Stack Web Development Project
- Firebase-Based Web Application

---

## 👨‍💻 Developer

Alpha Gym Management System  
Built for academic & practical implementation of modern web technologies.

---

⭐ If you found this useful, give it a star!
