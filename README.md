# 🧑‍💼 Employee Management System (EMS)

[![Java](https://img.shields.io/badge/Java-17%2B-blue?logo=java&logoColor=white)]()
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?logo=springboot&logoColor=white)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb&logoColor=white)]()
[![React](https://img.shields.io/badge/React-Vite-blue?logo=react&logoColor=white)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]()

A **Full-Stack CRUD Application** for managing employees, built with **Spring Boot**, **MongoDB Atlas**, and **Vite + React**.  
Manage employee data effortlessly — perform CRUD operations, search with autocomplete, and export employee lists to Excel, all through a clean and responsive UI.

---
<img width="1919" height="868" alt="Screenshot 2025-10-07 003523" src="https://github.com/user-attachments/assets/0ff3351a-4635-4dc8-9e05-3dd3ba8ad829" />

## 🚀 Features

### 🖥️ Frontend (Vite + React)
- 💡 Sleek and modern UI with **React + Vite**
- ✏️ Full **Employee CRUD** (Create, Read, Update, Delete)
- 🔍 **Search with Autocomplete**
- 📤 **Excel Export** for all employee data
- 🎨 Built using **normal CSS** (no frameworks for styling)

### ⚙️ Backend (Spring Boot + MongoDB Atlas)
- 🌐 RESTful APIs for all CRUD operations  
- 🗄️ MongoDB Atlas for secure cloud data storage  
- ⚡ Easy configuration and quick startup  
- ✅ Built-in validation and error handling  

---

## 🗂️ Project Structure

```

EMS/
├── EMS_backend/     # Spring Boot + MongoDB backend
└── EMS_frontend/    # Vite + React frontend

```

---

## 🧩 Backend Setup

### 🧱 Requirements
- **Java 17+**
- **Maven**

### 🔧 Configuration
Edit MongoDB connection details in:

```

EMS_backend/src/main/resources/application.properties

````

Example:
```properties
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster-url>/emsdb
spring.data.mongodb.database=emsdb
````

### ▶️ Run the Backend

```bash
cd EMS_backend
./mvnw spring-boot:run
```

API will be available at:
👉 **[http://localhost:8080/api/employees](http://localhost:8080/api/employees)**

---

## 💻 Frontend Setup

### 🧱 Requirements

* **Node.js 18+**
* **npm**

### ⚙️ Installation

```bash
cd EMS_frontend
npm install
```

### ▶️ Run the Frontend

```bash
npm run dev
```

The app will run at the local address shown in your terminal, typically:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 📋 Usage

✅ Add, edit, delete, and view employee records
🔍 Search employees with live autocomplete
📤 Export all employees as an **Excel file**
📱 Smooth, responsive, and minimal UI

---

## 🧾 API Endpoints

| Method | Endpoint              | Description             |
| :----- | :-------------------- | :---------------------- |
| GET    | `/api/employees`      | Get all employees       |
| GET    | `/api/employees/{id}` | Get employee by ID      |
| POST   | `/api/employees`      | Create a new employee   |
| PUT    | `/api/employees/{id}` | Update employee details |
| DELETE | `/api/employees/{id}` | Delete employee         |

---

## 🛠️ Tech Stack

| Layer           | Technology       |
| :-------------- | :--------------- |
| **Frontend**    | React, Vite, CSS |
| **Backend**     | Spring Boot      |
| **Database**    | MongoDB Atlas    |
| **Build Tools** | Maven, npm       |

---

## 📦 Excel Export Feature

Easily download all employee records in an `.xlsx` spreadsheet with one click from the UI.

---

## 👨‍💻 Developer

**Agnik Mondal**
💼 *Aspiring Full-Stack Developer*
📫 [LinkedIn](https://www.linkedin.com/in/agnik-mondal-11a37828a/) • [GitHub](https://github.com/agnik2003)

---

## 📜 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and share it.

---

⭐ *If you found this project useful, don’t forget to give it a star on GitHub!*

