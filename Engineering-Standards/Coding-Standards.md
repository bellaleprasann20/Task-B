# Coding Standards & Best Practices

## 1. Naming Conventions
* **Variables & Functions:** Use `camelCase` (e.g., `getUserById`, `orderTotal`).
* **Classes & Models:** Use `PascalCase` (e.g., `UserController`, `OrderModel`).
* **Constants & Environment Variables:** Use `UPPER_SNAKE_CASE` (e.g., `MAX_RETRIES`, `API_KEY`).
* **Boolean Variables:** Prefix with `is`, `has`, or `should` (e.g., `isActive`, `hasPermission`).

## 2. Formatting & Linting
* **Prettier:** Code formatting is exclusively handled by Prettier. Do not argue about tabs vs. spaces in PRs. (Standard: 2 spaces, single quotes, trailing commas).
* **ESLint:** All code must pass ESLint strict mode before being committed. Use the `husky` pre-commit hook.

## 3. Asynchronous Code
* **No Callbacks:** The use of raw callbacks for asynchronous operations is strictly forbidden.
* **Async/Await:** Use `async/await` for all asynchronous operations.
* **Concurrency:** Use `Promise.all()` when executing multiple, independent asynchronous tasks to reduce bottleneck times.

## 4. General Principles
* **DRY (Don't Repeat Yourself):** Extract repeated logic into shared utility functions.
* **Single Responsibility Principle (SRP):** A function should do one thing and do it well. If a function exceeds 50 lines, it likely needs to be broken down.
* **Guard Clauses:** Return early in functions to avoid deep nesting. Handle error conditions at the top of the function.