# Phase 1: Week 1 - Immediate Stabilization

## Objective
Halt the accumulation of technical debt, secure critical vulnerabilities, and align the engineering team on foundational standards. There are no architectural changes in this phase—only tooling and security patches.

## Key Deliverables

1. **Security Hotfixes (Priority 1)**
   - Audit the codebase for string-concatenated SQL queries.
   - Replace all vulnerable queries with parameterized inputs (e.g., `$1, $2`) to eliminate SQL Injection (SQLi) risks.

2. **Automated Tooling & Formatting**
   - Install and configure `ESLint` and `Prettier`.
   - Implement a `husky` pre-commit hook to block any unformatted code or linting errors from being committed.

3. **Secret Management**
   - Remove any hardcoded API keys or secrets from the source code.
   - Migrate all credentials to `.env` files and ensure `.env` is globally added to `.gitignore`.
   - Standardize environment variables across local development using a `.env.example` template.

4. **Basic CI Pipeline**
   - Create a basic GitHub Actions workflow that runs `npm install` and `npm run lint` on every Pull Request to enforce standards automatically.