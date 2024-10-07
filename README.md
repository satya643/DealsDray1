https://github.com/user-attachments/assets/589bb1f9-4f5d-4ca5-9bf2-dc3e274295fc

At the top, The Link is Project video link

# Employee Management System

## Project Overview

This is a full-stack **Employee Management System** application built using **React**, **Context API**, **HTML**, **CSS**, and **JavaScript** for the frontend, with a backend powered by **APIs** for managing employee data and authentication. The system enables users to create, edit, and manage employee records, with a secure OTP-based login/logout functionality.

## Features

- **Home Page Dashboard**: Displays an overview of employee data.
- **Create Employee**: Functionality to add new employees.
- **Edit Employee**: Allows users to update existing employee details.
- **Login/Logout with OTP Authentication**: Ensures secure access to the system.

## Frontend Technologies

- **React**: Used for building the user interface.
- **Context API**: For managing global application state.
- **HTML, CSS, JavaScript**: Core technologies for building the interface.

## Backend Technologies

- **Node.js/Express**: Backend server to handle requests.
- **APIs**: Used for managing employee data and authentication.
- **Database (e.g., MongoDB, MySQL)**: For persistent storage of employee data.
- **OTP Authentication API**: Ensures secure login via OTP.

## Folder Structure

```bash
/frontend
│
├── /public
│   ├── index.html                # Main HTML file
│   └── favicon.ico               # Website favicon
│
├── /src
│   ├── /assets                   # Assets like images, fonts, etc.
│   │   ├── /images               # Images for the project
│   │   └── /styles               # Global styles (Sass, CSS)
│   │       └── main.scss         # Example: Main Sass file
│   │
│   ├── /components               # Reusable components
│   │   ├── EmployeeForm.js       # Form for creating/editing employees
│   │   ├── EmployeeList.js       # List of employees
│   │   ├── Loader.js             # Loading spinner
│   │   ├── LoginForm.js          # Form for logging in
│   │   ├── Navbar.js             # Navigation bar component
│   │   └── OTPVerificationForm.js# OTP verification form
│   │
│   ├── /pages                    # Pages (views) of the app
│   │   ├── Login.js              # Login page
│   │   ├── Dashboard.js          # Dashboard page
│   │   ├── CreateEmployee.js     # Create new employee page
│   │   ├── EmployeeList.js       # List of employees page
│   │   └── EditEmployee.js       # Edit employee page
│   │
│   ├── /context                  # React Context (if using Context API)
│   │   ├── AuthContext.js        # Handles user authentication state
│   │   └── OtpContext.js         # Handles OTP state
│   │
│   ├── /services                 # API services (Axios or Fetch calls)
│   │   ├── authService.js        # API calls for authentication
│   │   ├── otpService.js         # API calls for OTP
│   │
│   ├── App.js                    # Main React component
│   ├── index.js                  # Entry point for React, renders App.js
│
├── package.json                  # Lists dependencies and project information
├── .env                          # Environment variables (API URLs, etc.)
├── .gitignore                    # Git ignore file for node_modules, etc.
└── README.md                     # Documentation about the project

/backend
│
├── /config
│   ├── db.js                    # MongoDB connection setup
│   └── cloudinary.js            # Cloudinary connection setup
│
├── /controllers
│   ├── authController.js        # Handles user registration, login, and OTP verification
│   └── employeeController.js    # Handles employee-related CRUD operations
│
├── /middleware
│   ├── authMiddleware.js        # Protects routes (JWT verification, etc.)
│   └── otpMiddleware.js         # Middleware for OTP verification and handling
│
├── /models
│   ├── User.js                  # User schema (stores user details like name, email, password)
│   ├── Otp.js                   # OTP schema (stores OTPs and expiration times)
│   └── Employee.js              # Employee schema (for employee records)
│
├── /routes
│   ├── authRoutes.js            # Authentication routes (register, login, OTP verification)
│   └── employeeRoutes.js        # Employee-related routes (CRUD operations)
│
├── /services
│   └── emailService.js          # Sends emails (OTP emails to users)
│
├── /utils
│   └── otpGenerator.js          # Generates OTP codes
│
├── server.js                    # Entry point of the application
├── .env                         # Environment variables (for sensitive data like DB URI, email credentials)
├── .gitignore                   # Git ignore file for node_modules, etc.
├── README.md                    # Documentation about the project
└── package.json                 # Lists dependencies and project information

```

## Installation Instructions

1. Clone the repository.
2. Navigate to the project directory and install dependencies:
   ```bash
   npm install
   ```
3. Set up backend:
   - Install backend dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Start the backend server:
     ```bash
     npm run start 
     ```
4. Run the frontend:
   ```bash
   npm start
   ```

## API Endpoints

- **Employee Management**:
  - `POST /api/employees` - Create a new employee.
  - `GET /api/employees/:id` - Retrieve employee details.
  - `PUT /api/employees/:id` - Update an employee.
  - `DELETE /api/employees/:id` - Delete an employee.
  
- **Authentication**:
  - `POST /api/auth/login` - Login with OTP.
  - `POST /api/auth/verify` - Verify OTP for login.

## Authentication Flow

1. The user logs in using their credentials.
2. OTP is generated and sent to the user for verification.
3. Once the OTP is verified, the user gains access to the dashboard.
