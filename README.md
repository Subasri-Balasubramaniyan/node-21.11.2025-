# HTTP and Express.js Fundamentals

This README provides a structured overview of core concepts related to HTTP, Node.js HTTP module basics, and Express.js fundamentals.

---

## 1. HTTP Fundamentals

HTTP (Hypertext Transfer Protocol) is the underlying protocol used by the web for communication between clients (browsers) and servers.

### Key Concepts

* **Client-Server Model:** The client sends a request; the server returns a response.
* **Stateless Protocol:** Each request is processed independently.
* **Methods:** Common HTTP methods include `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, and `OPTIONS`.
* **URL Structure:** Protocol, domain, path, and optional query parameters.

---

## 2. HTTP Module Basics (Node.js)

Node.js provides a built-in `http` module to create web servers without external libraries.

### Importing HTTP Module

```js
const http = require('http');
```

### Creating a Basic Server

```js
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

## 3. Creating HTTP Servers

Using the Node.js HTTP module:

* Handle incoming requests using the callback function.
* Read request method and URL using `req.method` and `req.url`.
* Send back responses via `res.write()`, `res.end()`, and headers.

Example:

```js
if (req.url === '/' && req.method === 'GET') {
  res.end('Home Page');
}
```

---

## 4. Request and Response Objects

### Request Object (`req`)

* Contains details sent by the client.
* Important properties:

  * `req.method`
  * `req.url`
  * `req.headers`
  * Event-based body parsing for POST data

### Response Object (`res`)

* Used to send data back to the client.
* Important methods:

  * `res.writeHead(statusCode, headers)`
  * `res.setHeader(name, value)`
  * `res.end(body)`

---

## 5. Status Codes and Headers

### Common Status Codes

* **200 OK** — Successful request
* **201 Created** — Resource successfully created
* **400 Bad Request** — Client error
* **401 Unauthorized** — Authentication required
* **404 Not Found** — Resource not found
* **500 Internal Server Error** — Server crash

### Headers

* Provide metadata about the request/response.
* Examples:

  * `Content-Type`
  * `Content-Length`
  * `Authorization`

Example:

```js
res.setHeader('Content-Type', 'application/json');
```

---

## 6. Introduction to Express.js

Express.js is a minimal and flexible Node.js framework used to simplify server creation.

### Features

* Middleware support
* Easy routing
* Simplified handling of requests and responses
* Faster development compared to raw HTTP module

Install Express:

```bash
npm install express
```

---

## 7. Setting Up an Express App

Basic setup:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.listen(3000, () => console.log('Server started on port 3000'));
```

---

## 8. Express Core

### Middleware

Functions that process requests before reaching the final route handler.

Example:

```js
app.use(express.json());
```

---

## 9. Routing (GET, POST, PUT, DELETE)

Express makes routing simple:

```js
app.get('/users', (req, res) => res.send('GET users'));
app.post('/users', (req, res) => res.send('POST user'));
app.put('/users/:id', (req, res) => res.send(`PUT user ${req.params.id}`));
app.delete('/users/:id', (req, res) => res.send(`DELETE user ${req.params.id}`));
```

---

## 10. Route Parameters and Query Strings

### Route Parameters

Used for dynamic URLs.

```js
app.get('/product/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});
```

### Query Strings

Key-value pairs appended to URLs.
Example: `/search?q=laptop&sort=asc`

In Express:

```js
app.get('/search', (req, res) => {
  res.send(req.query);
});
```

---

## Summary

This guide covers:

* Core HTTP concepts
* Node.js HTTP module
* Express.js fundamentals
* Routing, middleware, status codes, query strings, and server creation

Use this README as a foundational reference for server-side development with Node.js and Express.js.
