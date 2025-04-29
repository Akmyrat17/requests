# Request Management System

This project is a **Request Management System** built with **Express.js** and **TypeScript**. It provides various endpoints for managing requests, including creation, cancellation, and solutions. The app uses **Prisma** for database management and **Joi** for input validation.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Configuration](#configuration)
- [Database Migrations](#database-migrations)
- [Running the Project](#running-the-project)
  - [Development Mode](#development-mode-with-hot-reload)
  - [Production Mode](#production-mode)
- [Documentation and Api Testing](#documentation-and-api-testing)

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (version 14 or above)
- **npm** (Node Package Manager) or **Yarn**
- **Prisma** CLI (if you are using Prisma for database migrations)

## Setup & Installation

Follow these steps to set up and run the project:

1. **Clone the repository:**

   Clone the repository to your local machine:

   ```bash
   git clone https://your-repository-url.git
   cd your-repository-folder
   Install dependencies:
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

Before running the project, you need to configure the environment variables. Create a `.env` file in the root directory of the project and add the following environment variables:

```bash
PORT=3000
```

## Database Migrations

To run database migrations, use the following command:

```bash
npm run prisma:migrate
```

## Running the Project

There are two ways to run the project:

### Development Mode with Hot Reload

To run the project in development mode with hot reload, use the following command:

```bash
npm run dev
```

### Production Mode

To run the project in production mode, use the following command:

```bash
npm run start
```

## Documentation and Api Testing

Import the postman collection json file **request.postman_collection.json** to postman. In the collection every api is written in a way that you can test it easily.
