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

```
git clone https://github.com/your-username/your-repository.git
```

### 2. Navigate to the project directory and install all the dependencies
```
cd todo
npm install
```

### 3. Run Database Migrations
```bash
npm run migrate
```

### 4. Push Database Changes to the SQLite database
```bash
npm run db:push
```
### 5. Start the Next.js development server
```
npm run dev
```
### The application will be running at http://localhost:3000

