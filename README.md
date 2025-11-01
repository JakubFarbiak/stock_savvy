StockSavvy - Inventory Management

This is the StockSavvy inventory app (Spring Boot backend + React Vite frontend).

Quickstart (local)

Start MySQL (or use Docker Compose below).

Backend + Frontend together:

The frontend is built and served by Spring Boot.

cd backend
./mvnw spring-boot:run


API: http://localhost:8080/api

Frontend: http://localhost:8080/

Frontend development only (optional):

If you want hot-reload for React:

cd frontend
npm install
npm run dev


Make sure API base URL in frontend/src/api/api.js points to your backend (http://localhost:8080/api).

Docker Compose
docker-compose up --build


This starts MySQL, backend, and frontend in one go.

Notes

Backend: Spring Boot, Hibernate, MySQL.

Frontend: React, Vite, Bootstrap.

Production: frontend build (dist) is served directly by Spring Boot.

Expand controllers, validations, DTOs, security, and tests as needed.
