# Phase 2: Month 1 - Testing & Refactoring Core Paths

## Objective
Establish a safety net through automated testing and begin refactoring the most critical, high-risk business logic. Implement automated deployments to eliminate human error.

## Key Deliverables

1. **Testing Foundation**
   - Introduce `Jest` and `Supertest` to the repository.
   - Write Unit Tests for pure utility functions.
   - Write Integration Tests for the Top 3 most critical API routes (e.g., Authentication, Checkout/Orders).

2. **Refactor Critical Paths**
   - Target the legacy `processOrder` module and similar highly-nested callbacks.
   - Modernize control flow using `async/await` and early returns.
   - Implement custom error classes (`AppError`) and a global Express error-handling middleware.

3. **Staging Environment & CI/CD**
   - Provision a Staging environment that mirrors Production (e.g., on Render or AWS).
   - Expand GitHub Actions: On merge to the `main` branch, the pipeline must automatically run all tests and deploy to Staging.

4. **Database Transactions**
   - Wrap multi-step database mutations (like inventory deduction + order creation) in strict `BEGIN`, `COMMIT`, and `ROLLBACK` blocks.