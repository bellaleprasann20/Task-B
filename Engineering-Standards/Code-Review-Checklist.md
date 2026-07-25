# Code Review (PR) Checklist

Reviewers: Use this checklist to ensure high quality before approving a Pull Request.

## 1. Architecture & Logic
- [ ] Does the code follow the Single Responsibility Principle?
- [ ] Are all external inputs properly sanitized and validated?
- [ ] Are edge cases and negative paths handled gracefully?
- [ ] Is the database query optimized (e.g., no N+1 query problems)?

## 2. Security
- [ ] Are SQL queries parameterized to prevent injection?
- [ ] Is sensitive data (passwords, PII) stripped from API responses and logs?
- [ ] Are there any hardcoded secrets?

## 3. Testing & Reliability
- [ ] Are there unit/integration tests for the new logic?
- [ ] Do the tests cover failure scenarios, not just the "happy path"?
- [ ] Does the code include meaningful error handling rather than silent failures?

## 4. Style & Maintainability
- [ ] Are variables and functions named descriptively?
- [ ] Does the CI pipeline (Linting, Formatting, Tests) pass successfully?
- [ ] Is complex business logic documented with JSDoc or inline comments?