# Mohamed Office

## Overview
Top Box Office in the US

### Approach
To tackle this project, I followed a systematic development process:

1. **Planning and Setup**: Defined project requirements and set up a monorepo structure for managing both frontend and backend.

2. **Frontend Development**:
   - Started by creating the initial layout to visualize the application's structure and design.
   - Mocked data was used to test and refine the layout, ensuring a smooth user experience before implementing real data.
   - Installed and configured all necessary frontend packages to ensure the development environment was fully prepared.

3. **Backend Development**:
   - Built a RESTful API using Express for handling application data.
   - Configured environment variables with Dotenv to securely manage sensitive data like API keys.
   - Enabled CORS to allow secure communication between the frontend and backend during development.
   - Used Nodemon to enhance development efficiency by automatically restarting the server on file changes.
   - Leveraged the Request library for interacting with external APIs.

4. **Integration**:
   - Connected the frontend to the backend API using React Query for efficient data fetching and caching.

5. **Authentication**:
   - Implemented user authentication using Clerk. Clerk was chosen because it simplifies session management, handling user sessions securely and efficiently out of the box.


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







