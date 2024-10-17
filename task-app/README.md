# Vite React App for task management

This is a React application created using Vite, a modern build tool that provides a fast and optimized development environment.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or higher)
- npm (Node Package Manager, comes with Node.js)

You can check your Node.js and npm versions by running:

```bash
node -v
npm -v
````

## Installation

Clone the repository:

```bash
git clone https://github.com/neha-gupta1993/task-management.git
cd task-management
cd task-app
````

Install the dependencies:
```bash
npm install
````

## Running the App

To start the development server, run the following command:
```bash
npm run dev
````
Your app will be running at http://localhost:3001

Open your browser and navigate to the URL above to view your app.


## Project Structure

Here’s a quick overview of the project structure:
task-app/
│
├── public/             # Static assets
│
├── src/                # Source files
│   ├── api/            # Axios configuration including all api calls
│   ├── assets/         # Asset files (images, etc.)
│   ├── components/     # React components
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
│
├── .gitignore          # Git ignore file
├── index.html          # Main HTML file
├── package.json        # Project metadata and dependencies
└── vite.config.js      # Vite configuration file

