Employee Management System
A full-stack CRUD application for managing employees, built with Spring Boot (MongoDB Atlas) and Vite + React.

Features
Backend: Spring Boot REST API with MongoDB Atlas

Frontend: Modern React (Vite) app with clean UX and normal CSS

Employee CRUD operations, search + autocomplete, and Excel export

Project Structure
text
EMS/
  ├── EMS_backend/    # Spring Boot + MongoDB backend
  └── EMS_frontend/   # Vite + React frontend
Backend Setup
Requirements: Java 17+ & Maven installed

Configure MongoDB:
Edit EMS_backend/src/main/resources/application.properties with your MongoDB Atlas URI and credentials.

Run the backend:

bash
cd EMS_backend
./mvnw spring-boot:run
The API will be available at http://localhost:8080/api/employees

Frontend Setup
Requirements: Node.js 18+ & npm

Install dependencies:

bash
cd EMS_frontend
npm install
Start frontend:

bash
npm run dev
View app at the terminal’s shown local address (usually http://localhost:5173).

Usage
Add, edit, delete, and search employees from the UI.

Download all employees as an Excel spreadsheet via the provided button.

License
MIT
