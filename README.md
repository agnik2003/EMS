# 🧑‍💼 Employee Management System (EMS)

A **Full-Stack CRUD Application** for managing employees, built with **Spring Boot**, **MongoDB Atlas**, and **Vite + React**.  
Seamlessly manage employee data, perform CRUD operations, search with autocomplete, and export records to Excel — all through a clean, modern UI.

---

## 🚀 Features

### 🖥️ Frontend (Vite + React)
- Sleek and responsive UI built with **React + Vite**
- Employee **CRUD operations** (Create, Read, Update, Delete)
- **Search & Autocomplete** for quick employee lookup
- **Excel Export** button to download employee data
- Built using **normal CSS** for simplicity and maintainability

### ⚙️ Backend (Spring Boot + MongoDB Atlas)
- RESTful APIs for all CRUD operations  
- MongoDB Atlas for scalable and secure data storage  
- Easy configuration and integration  
- Error handling and validation for safe operations  

---

## 🗂️ Project Structure

EMS/
├── EMS_backend/ # Spring Boot + MongoDB backend
└── EMS_frontend/ # Vite + React frontend

yaml
Copy code

---

## 🧩 Backend Setup

### 🧱 Requirements
- **Java 17+**
- **Maven**

### 🔧 Configuration
Edit the MongoDB connection details in:

EMS_backend/src/main/resources/application.properties

kotlin
Copy code

Example:
```properties
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster-url>/emsdb
spring.data.mongodb.database=emsdb
▶️ Run the Backend
bash
Copy code
cd EMS_backend
./mvnw spring-boot:run
API will be available at:
👉 http://localhost:8080/api/employees

💻 Frontend Setup
🧱 Requirements
Node.js 18+

npm

⚙️ Installation
bash
Copy code
cd EMS_frontend
npm install
▶️ Run the Frontend
bash
Copy code
npm run dev
The app will run at the local address shown in your terminal, typically:
👉 http://localhost:5173

📋 Usage
✅ Add, edit, delete, and view employee details
🔍 Search employees with live autocomplete
📤 Export all employee data to Excel
📱 Enjoy a smooth and minimal user experience

🧾 API Endpoints
Method	Endpoint	Description
GET	/api/employees	Fetch all employees
GET	/api/employees/{id}	Fetch a single employee
POST	/api/employees	Add a new employee
PUT	/api/employees/{id}	Update employee details
DELETE	/api/employees/{id}	Delete an employee

🛠️ Tech Stack
Layer	Technology
Frontend	React, Vite, CSS
Backend	Spring Boot
Database	MongoDB Atlas
Build Tools	Maven, npm

📦 Excel Export Feature
Easily download all employee records as an .xlsx spreadsheet from the UI with one click.

🧑‍💻 Developer
Agnik Mondal
💼 Aspiring Full-Stack Developer
📫 LinkedIn | GitHub

📜 License
This project is licensed under the MIT License.
Feel free to use, modify, and share it.

⭐ If you like this project, consider giving it a star on GitHub!

yaml
Copy code

---

Would you like me to make it **GitHub-styled with badges** (like Java, React, MongoDB, License badges at t
