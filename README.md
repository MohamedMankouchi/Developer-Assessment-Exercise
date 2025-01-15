# Project Name

## Overview
This project is built using **React**, **Vite**, and **TypeScript**. It includes both frontend and backend components. The frontend leverages modern React tools and routing, while the backend is powered by Express with additional middleware for functionality such as environment variable management and HTTP request handling.

## Features
- **Frontend**
  - User authentication with Clerk
  - State management and server communication using React Query
  - Client-side routing with React Router
  
- **Backend**
  - RESTful API with Express
  - Environment configuration with Dotenv
  - CORS enabled for cross-origin requests
  - Nodemon for automatic server restarts during development
  - External API requests using Request library

## Installation

### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (v16 or higher recommended)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/MohamedMankouchi/Developer-Assessment-Exercise.git
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   # Install frontend dependencies
   cd ./Frontend
   npm install

   # Install backend dependencies
   cd ./Backend
   npm install
   ```

3. Set up environment variables:
   - For the **backend**, create a `.env` file in the `backend` directory with the following content:
     ```env
     API_KEY=your-backend-api-key
     ```
   - For the **frontend**, create a `.env` file in the `frontend` directory with the following content:
     ```env
     VITE_CLERK_PUBLISHABLE_KEY=your-frontend-publishable-key
     ```

4. Run the application:
   ```bash
   # Start the backend server
   cd ./Backend
   npm run dev or nodemon index.js

   # Start the frontend development server
   cd ./Frontend
   npm run dev
   ```

## Installed Packages

### Frontend
```json
{
  "@clerk/clerk-react": "^5.21.2",
  "@tanstack/react-query": "^5.64.1",
  "@tanstack/react-query-devtools": "^5.64.1",
  "path": "^0.12.7",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.1"
}
```

### Backend
```json
{
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "nodemon": "^3.1.9",
  "request": "^2.88.2"
}
```

## Scripts

### Frontend
- `npm run dev` - Starts the development server
- `npm run build` - Builds the production-ready app

### Backend
- `npm run dev or nodemon index.js` - Starts the backend server with Nodemon




