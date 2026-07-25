# REST API Design Standards

## 1. URL Structure & Naming
* Use nouns, not verbs, for endpoint paths (e.g., `/users`, not `/getUsers`).
* Use plural nouns for resources (e.g., `/api/v1/orders`).
* Nest resources logically to show relationships (e.g., `/users/123/orders`).

## 2. HTTP Methods
* `GET`: Retrieve data (no side effects).
* `POST`: Create a new resource.
* `PUT`: Completely replace an existing resource.
* `PATCH`: Partially update an existing resource.
* `DELETE`: Remove a resource.

## 3. HTTP Status Codes
Always return the correct status code. Do not return `200 OK` with an error message in the body.
* `200 OK`: Successful read or update.
* `201 Created`: Successful creation of a resource.
* `400 Bad Request`: Client sent invalid data.
* `401 Unauthorized`: Missing or invalid authentication token.
* `403 Forbidden`: Authenticated, but lacks required permissions.
* `404 Not Found`: Resource does not exist.
* `500 Internal Server Error`: An unhandled exception occurred on the server.

## 4. Response Payload Format
All API responses must follow a standardized JSON wrapper for predictability.

**Success Response:**
```json
{
  "success": true,
  "data": { ... },
  "meta": { "page": 1, "total": 50 } // optional pagination
}