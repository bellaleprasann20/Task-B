# Engineering Priority Matrix (Eisenhower Method)

To effectively modernize the system without halting new feature development, we must categorize our technical debt by Impact vs. Effort.

## Quadrant 1: Quick Wins (High Impact, Low Effort)
*Execute Immediately (Weeks 1-2)*
* **Implement Parameterized Queries:** Systematically replace all string-concatenated SQL queries to instantly patch SQL injection vulnerabilities.
* **Add ESLint & Prettier:** Enforce automated code formatting on pre-commit hooks to standardize the codebase and stop style debates in PRs.
* **Implement Global Error Handling:** Wrap core Express controllers in an `asyncHandler` to catch unhandled rejections and prevent server crashes.

## Quadrant 2: Strategic Initiatives (High Impact, High Effort)
*Schedule for Quarter 1 & 2*
* **Implement Database Transactions:** Refactor critical financial and inventory paths to use strict `BEGIN/COMMIT/ROLLBACK` transactional logic.
* **CI/CD Pipeline Setup:** Build automated GitHub Actions to run tests and deploy to staging/production, removing human error from releases.
* **Refactor to Modular Architecture:** Begin breaking the monolithic codebase into distinct domains (e.g., Users, Orders, Inventory) using controller-service-repository patterns.

## Quadrant 3: Fill-ins (Low Impact, Low Effort)
*Tackle during downtime or hackathons*
* **Update Legacy Dependencies:** Bump minor versions of NPM packages to patch low-severity vulnerabilities.
* **Documentation:** Write JSDoc comments for existing utility functions.

## Quadrant 4: Time Wasters (Low Impact, High Effort)
*Do Not Do*
* **Full Microservices Rewrite:** Pausing all product development for 6 months to rewrite the app in microservices is too risky. We must refactor incrementally (the Strangler Fig pattern).
* **Switching Frameworks:** Migrating from Express to NestJS or Fastify will burn cycles with minimal immediate ROI for the business. Stick to Express and fix the underlying logic first.