# Lead Management Platform 🚀

A full-stack (MERN) Lead Management application built with a React frontend and a Node.js/Express backend. This project features secure authentication, RESTful APIs, and a scalable architecture strategy.

## 🌍 Live Demo
* **Frontend (Vercel):** [Insert your Vercel URL here]
* **Backend API (Render):** [Insert your Render URL here]

## 📂 Project Structure

This repository is divided into the core application codebase and a strategic modernization plan:

* **`/` (Root):** Contains the core application codebase (Task A). Features the full React frontend and Node/Express backend connected to MongoDB Atlas.
* **`/task-b`:** Contains the Engineering Strategy (Task B). Includes codebase assessments, refactoring examples, migration timelines, and architecture diagrams for scaling the platform.

## 🛠️ Tech Stack
* **Frontend:** React.js, Vite
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas, Mongoose
* **Deployment:** Vercel (Frontend), Render (Backend)

## 🚀 Local Development Setup

To run this project locally, follow these steps:

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/your-username/lead-management-platform.git
cd lead-management-platform
\`\`\`

### 2. Environment Variables
Create a `.env` file in the root directory and add the following:
\`\`\`env
# Backend variables
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173

# Frontend variables (if kept in a separate frontend folder)
VITE_API_URL=http://localhost:5000/api
\`\`\`

### 3. Install Dependencies & Run
\`\`\`bash
# Install backend dependencies
npm install

# Start the development server
npm run dev
\`\`\`

## 📚 Engineering Standards
As part of our scaling strategy (Task B), this project adheres to strict engineering standards including:
* Centralized Error Handling
* RESTful API Naming Conventions
* Parameterized Queries (No SQL Injection)
* CI/CD via GitHub Actions (Proposed)

---
*Built as part of a Full Stack Engineering assessment.*