# Next.js App with Drizzle ORM and SQLite

This is a modern Next.js application built using the App Router and Server Actions. It leverages Drizzle ORM for database management and SQLite as the database engine.

## Features

- Next.js App Router
- Server Actions
- Drizzle ORM for database operations
- SQLite database
- Tailwind CSS for styling
- Optimized for performance and scalability

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm or yarn installed globally
- SQLite installed locally (if you want to manage the database directly)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git

# 1. Navigate to the project directory and install all the dependencies
cd todo
npm install

# 2. Run Database Migrations to ensure the database schema is up-to-date
npm run migrate

# 3. Push Database Changes to apply any schema updates to the SQLite database
npm run db:push

# 4. Start the Next.js development server
npm run dev

# The application will be running at http://localhost:3000

```bash
