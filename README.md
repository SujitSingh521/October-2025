# October-2025
tenacious techies


<!-- ====================================================================================== -->

# 🧑‍💻 Full Stack User Management App (Next.js + MySQL)

This is a full-stack web application that allows users to submit their information (name, email, age, city) through a form. The data is stored in a MySQL database and displayed in a responsive table. Built using **Next.js (React)**, **MySQL**, and **Tailwind CSS**.

---

## 🚀 Features

- ✅ Add user information via a form
- ✅ Store data in MySQL using API routes
- ✅ Display users in a table with real-time updates
- ✅ View and verify data in MySQL Workbench
- ✅ Clean UI with Tailwind CSS
- ✅ Full stack flow: **Form → API → MySQL → UI**

---

## 📷 Screenshots

| Form | Users Table |
|------|-------------|
| ![Form Screenshot](./screenshots/form.png) | ![Table Screenshot](./screenshots/table.png) |

*(Add your screenshots in a `/screenshots` folder if needed)*

---

## 🏗️ Technologies Used

- **Frontend:** Next.js (React), Tailwind CSS
- **Backend:** API Routes (`/api` in Next.js)
- **Database:** MySQL
- **ORM/Driver:** `mysql2/promise`
- **Admin Tool:** MySQL Workbench

---

## 📁 Project Structure
```
/pages
  /api
    add-user.js       # POST API to add a user
    get-users.js      # GET API to fetch all users

/components
  UserForm.js         # React component for user input
  UsersTable.js       # Table to display users

/lib
  db.js               # MySQL connection pool

.env.local            # Environment variables



---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


2. Install Dependencies
npm install


3. Create .env.local File
Create a .env.local file in the root of your project:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=myapp
DB_PORT=3306



4. Set Up MySQL Database
Open MySQL Workbench or CLI and run:

CREATE DATABASE IF NOT EXISTS myapp;

USE myapp;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  age INT NOT NULL,
  city VARCHAR(100) NOT NULL
);



5. Run the App
npm run dev


Open in browser: http://localhost:3000