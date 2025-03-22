# NaviGo Project README

## Project Overview

The NaviGo Project is a ride-hailing application that allows users to book rides, track drivers in real time, and manage their ride. This project is built using a MERN (MongoDB, Express.js, React.js, Node.js) stack with Google Maps API integration for location-based services.

## Features

- User authentication (Registration & Login)
- Ride booking system
- Real-time driver tracking
- Distance based fare calculation

## How to Fork and Use This Project

Follow these steps to fork and set up the NaviGo project on your local machine.

### Step 1: Fork the Repository

1. Navigate to the GitHub repository of this project.
2. Click the "Fork" button in the top-right corner to create a copy in your GitHub account.

### Step 2: Clone the Repository

After forking, clone the repository to your local machine using:

```sh
 git clone https://github.com/RoHiT-48566/NaviGo
```

### Step 3: Install Dependencies

Navigate to the project directory and install dependencies for both frontend and backend:

```sh
cd navigo-project
```

#### Backend Setup

```sh
cd backend
npm install
```

#### Frontend Setup

```sh
cd ../frontend
npm install
```

### Step 4: Environment Variables Setup

Create `.env` files in both the frontend and backend directories with the following configurations.

#### `.env` - Frontend

```
VITE_BASE_URL=http://localhost:4000
GOOGLE_MAPS_API_KEY=<your-google-maps-api-key>
```

#### `.env` - Backend

```
PORT=4000
DB_CONNECT=<your-database-connection-string>
JWT_SECRET=uber-secret
GOOGLE_MAPS_API=<your-google-maps-api-key>
```

### Step 5: Start the Project

#### Run Backend Server

```sh
cd backend
npm start
```

#### Run Frontend

```sh
cd frontend
npm run dev
```

### Step 6: Open the Application

Once both servers are running, open `http://localhost:5173` in your browser to access the application.

## Technologies Used

- **Frontend:** React.js, Vite, Tailwind CSS, GSAP
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Maps & Location Services:** Google Maps API

## Contributing

Contributions are welcome! Follow the standard GitHub workflow:

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your fork (`git push origin feature/your-feature`)
5. Submit a pull request

Thank you 🚀
