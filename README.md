# StockSavvy - Inventory Management (scaffold)

This archive contains a minimal scaffold for the StockSavvy inventory app (Spring Boot backend + React Vite frontend).

## Quickstart (local)
- Start a MySQL instance (or use Docker Compose below)
- Backend: `cd backend` then `mvn spring-boot:run`
- Frontend: `cd frontend` then `npm install && npm run dev`

## Docker Compose
`docker-compose up --build` will start MySQL, backend, and frontend.

This scaffold is intentionally minimal. Expand controllers, validations, DTOs, security, and tests as needed.
