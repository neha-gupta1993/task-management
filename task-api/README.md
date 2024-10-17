# Node.js MySQL Application to list / create / delete tasks

This is a Node.js application that connects to a MySQL database. It serves as a simple API for managing data.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or higher)
- npm (Node Package Manager, comes with Node.js)
- MySQL Server

You can check your Node.js and npm versions by running:

```bash
node -v
npm -v
````

## Installation

Clone the repository:

git clone https://github.com/neha-gupta1993/task-management.git
cd task-management
cd task-api

Install the dependencies:
```bash
npm install
````

## Configuration

Run the following SQL command to create a database and table:

CREATE DATABASE task_db;
CREATE TABLE `task` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `description` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


## Running the Application

To start the application, run:
```bash
node server.js
```
Your API will be running at http://localhost:8080


## API Endpoints

Here are the available API endpoints:

Create Task
POST /task

Request Body:
    {
    "description": "Sample Task"
    }

Response:
    {
    "message": "Task saved successfully!"
    }

Error Responses
If a required field is missing, you may receive a 400 Bad Request response:
    {
    "message": "Description is required and must be a string."
    }


## Project Structure

Here’s a quick overview of the project structure:

task-api/
│
├── config/             # Database configuration
│   └── connection.js
├── server.js           # Main server file - due to minimal code all endpoints are defined in same file
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
