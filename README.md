# Backend API for Basic Activity Booking App

## Description
This project implements a backend REST API for a "Basic Activity Booking App" using Node.js, Express, MongoDB, and JWT authentication. The app allows users to register, log in, view available activities, book activities, and view their bookings.

## Features
- User Registration & Login
- List available Activities
- Book an Activity (for authorized users)
- View User's Bookings

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Validation:** express-validator
- **Password Hashing:** bcrypt

## Endpoints

### 1. **User Registration**
- `POST /register`
- **Body:**
  ```json
  {
    "name": "navin kumar",
    "email": "navinkumar@example.com",
    "phone": "1234567890",
    "password": "password123"
  }


## Setup Instructions

### 1. Clone the repository
Clone the project repository to your local machine using the following command:
```bash
git clone <repository_url>

2. Navigate to the project directory
cd <project_directory>

3. Install dependencies
npm install

4. Configure environment variables
MONGO_URI=
JWT_SECRET=
PORT=

5. Run the app

npm run start

## Postman Collection
You can use the following Postman collection to test the API:

**Collection URL**: [Basic Activity Booking API Postman Collection](

`https://elements.getpostman.com/redirect?entityId=28621334-12d662fc-2ba7-47ce-a44e-6a6b2865309b&entityType=collection`)


## Postman Collection Documentation

You can access the API documentation here: [Postman API Documentation](https://documenter.getpostman.com/view/28621334/2sB2j7eA6j)

