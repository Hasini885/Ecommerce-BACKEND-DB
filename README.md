# Ecommerce Backend API

Backend REST API for an e-commerce application built using Node.js, Express.js, and MongoDB.

## Features

* User Management (CRUD)
* Product Management (CRUD)
* Order Management (CRUD)
* MongoDB Integration with Mongoose
* MVC Architecture

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

## Setup

```bash
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## API Routes

### Users

* POST /users
* GET /users
* GET /users/:id
* PUT /users/:id
* DELETE /users/:id

### Products

* POST /products
* GET /products
* GET /products/:id
* PUT /products/:id
* DELETE /products/:id

### Orders

* POST /orders
* GET /orders
* GET /orders/:id
* DELETE /orders/:id
* PUT /orders/:id

