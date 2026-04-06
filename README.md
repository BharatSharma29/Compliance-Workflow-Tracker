# Cloud-Native Compliance Workflow Tracker

## 📌 Project Overview
This project is a cloud-based application designed to manage compliance controls, evidence requests, and audit workflows.

It demonstrates:
- Cloud-based architecture principles
- Role-based access control
- REST API development
- Frontend-backend integration

---

## 🛠 Technologies Used

### Frontend
- React (Vite)
- Axios
- React Router

### Backend
- Node.js (Express)
- UUID (for unique IDs)

### Cloud (to be integrated later)
- AWS EC2
- DynamoDB
- S3
- SQS
- Cognito

---

## 📁 Project Structure
compliance-tracker/
│
├── backend/ → Express API
├── frontend/ → React App


---

## ▶️ How to Run the Project Locally

### 1. Start Backend

Open terminal:
cd backend
npm install
npm run dev

Expected: Server running on port 3000

---

### 2. Start Frontend

Open another terminal:
cd frontend
npm install
npm run dev

Open browser: http://localhost:5173


---

## 🧪 How to Test

### Create a Control

1. Open frontend
2. Enter:
   - Title
   - Framework
   - Frequency
3. Click "Create Control"

You should see the control appear in the list.

---

## 🔐 Authentication (Temporary)

Currently, authentication is simulated.

- Default role: Admin
- Can be modified in: backend/src/middleware/auth.js

---

## ⚠️ Important Notes

- Database is currently simulated (in-memory)
- Data will reset when server restarts
- AWS services will be integrated in later stages

---

## 🚀 Future Improvements

- DynamoDB integration
- S3 file uploads
- SQS event processing
- Cognito authentication
- Deployment on AWS EC2
- CI/CD pipeline with GitHub Actions

---

## 👨‍🏫 For Examiner

No prior JavaScript knowledge is required.

Simply:
1. Run backend
2. Run frontend
3. Open browser

The system will function locally without cloud setup.

---# Compliance-Workflow-Tracker
