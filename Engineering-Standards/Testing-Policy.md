```markdown
# Quality Assurance & Testing Policy

## 1. The Test Pyramid
We follow the standard testing pyramid to balance speed and confidence:
* **Unit Tests (70%):** Fast, isolated tests for utility functions, helpers, and pure logic. Mock all external dependencies.
* **Integration Tests (20%):** Tests that ensure controllers, services, and the database communicate correctly.
* **End-to-End / E2E (10%):** Automated user flows testing the entire stack from the UI to the database (e.g., Cypress/Playwright).

## 2. Coverage Requirements
* **New Code:** Any new feature or bug fix must include tests. A PR will not be approved if coverage for new lines is below **80%**.
* **Legacy Code:** When touching a legacy file, write a basic test for the existing behavior before refactoring it (the "Boy Scout Rule").

## 3. Tools
* **Backend:** Jest (Test Runner) and Supertest (API endpoint testing).
* **Frontend:** Vitest or Jest (Unit), React Testing Library (Component), Playwright (E2E).

## 4. Test Data Management
* Never test against the production database.
* Use a dedicated in-memory database (e.g., SQLite) or a Dockerized test database.
* Always clean up/reset the database state `beforeEach` test to prevent flakiness.