# Request Management System

This project is a **Request Management System** built with **Express.js** and **TypeScript**. It provides various endpoints for managing requests, including creation, cancellation, and solutions. The app uses **Prisma** for database management and **Joi** for input validation.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
  - [Development Mode](#development-mode-with-hot-reload)
  - [Production Mode](#production-mode)
- [Database Migrations](#running-database-migrations)
- [Testing the API](#testing-the-api)
- [Project Structure](#project-structure)
- [Conclusion](#conclusion)

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

Run the following command to install the required dependencies:

bash
Copy
Edit
npm install
or if you are using Yarn:

bash
Copy
Edit
yarn install
This will install all the necessary packages defined in package.json.

Install TypeScript (if it's not globally installed):

If you don’t have TypeScript installed globally, it will be installed as a dev dependency.

bash
Copy
Edit
npm install typescript --save-dev
Configuration
The project requires a few environment variables for configuration.

Create a .env file in the root directory:

You can copy the following configuration:

env
Copy
Edit
DATABASE_URL=your-database-url
PORT=3001
Replace your-database-url with the actual URL for your database. You can use PostgreSQL, MySQL, or any other supported database.

Set up Prisma Database Configuration:

If you're using Prisma, the database URL can also be set in the prisma/schema.prisma file. For example:

prisma
Copy
Edit
datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}
Running the Project
There are two primary ways to run the project:

Development Mode (with hot-reload):
Run in development mode with auto-reload:

This mode will automatically compile TypeScript code and restart the server using nodemon.

bash
Copy
Edit
npm run dev
or using Yarn:

bash
Copy
Edit
yarn dev
This will start the server and keep watching for changes in the src folder. Whenever you make changes, the TypeScript code will be compiled, and the server will automatically restart.

Production Mode:
Compile TypeScript code:

To prepare for production, compile the TypeScript code into JavaScript:

bash
Copy
Edit
npm run build
or with Yarn:

bash
Copy
Edit
yarn build
This will output the compiled JavaScript files into the dist folder.

Start the server in production:

After compiling, you can run the project in production mode:

bash
Copy
Edit
npm start
or with Yarn:

bash
Copy
Edit
yarn start
This will run the server using the compiled JavaScript code in the dist directory.

Running Database Migrations
If you're using Prisma for database management, you can run the migrations with the following command:

bash
Copy
Edit
npm run prisma:migrate
This will apply any pending database migrations to keep your schema in sync with the database.

You can also generate Prisma client with:

bash
Copy
Edit
npm run prisma:generate
Testing the API
Once the server is running, you can test the API endpoints using tools like Postman, Insomnia, or Swagger (if integrated). Here are the main endpoints:

1. Create a Request
   URL: POST /requests

Request Body:

json
Copy
Edit
{
"subject": "Your subject",
"text": "Your text content"
}
Response:

A new request will be created and returned with its details.

2. Start a Request
   URL: PATCH /requests/:id/start

Request Body: None

Response:

The request will be marked as started and returned with its updated status.

3. Cancel a Request
   URL: PATCH /requests/:id/cancel

Request Body:

json
Copy
Edit
{
"cancelReason": "Reason for cancellation"
}
Response:

The request will be marked as cancelled, and the response will include cancellation details.

4. Complete a Request
   URL: PATCH /requests/:id/complete

Request Body:

json
Copy
Edit
{
"solutionText": "Solution provided"
}
Response:

The request will be marked as completed with the provided solution text.

Project Structure
Here is an overview of the project's directory structure:

bash
Copy
Edit
├── src/ # Source code
│ ├── controllers/ # Express route handlers
│ ├── dtos/ # Data transfer objects (DTOs)
│ ├── middlewares/ # Middleware functions (e.g., error handling)
│ ├── models/ # Prisma models and database logic
│ ├── routes/ # API routes
│ └── services/ # Business logic (service layer)
├── dist/ # Compiled JavaScript files (generated on build)
├── node_modules/ # Project dependencies
├── .env # Environment variables
├── .gitignore # Git ignore file
├── package.json # Project metadata and dependencies
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation
Conclusion
Once you're done setting everything up, the server will be running, and you can start making requests to the API. Feel free to modify the controllers and services to add more functionality as needed.

Happy coding! 🚀

yaml
Copy
Edit

---

Save this as `README.md` in the root of your project directory.

This README contains a detailed setup guide, explanation of project structure, and usage instructions to help you or others easily run and work with the project. Let me know if you need further adjustments!
