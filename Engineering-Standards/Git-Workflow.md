# Git & Version Control Workflow

## 1. Branching Strategy (Feature Branching)
* **`main`:** The source of truth. This branch is protected and always reflects production-ready code.
* **Feature Branches:** Created from `main`. Use the format `<type>/<ticket-number>-<brief-description>`.
  * Examples: `feat/ENG-123-user-login`, `bugfix/ENG-124-cart-crash`.

## 2. Commit Message Standards (Conventional Commits)
All commit messages must follow the Conventional Commits specification to allow for automated changelog generation.
* `feat:` A new feature.
* `fix:` A bug fix.
* `chore:` Routine tasks, dependency updates, tooling setup.
* `docs:` Documentation updates.
* `refactor:` Code changes that neither fix a bug nor add a feature.
* **Example:** `feat(auth): add JWT generation on user login`

## 3. Pull Request (PR) Policy
* **Approval:** All PRs require at least one approval from a peer engineer.
* **CI/CD:** The PR cannot be merged unless the GitHub Actions pipeline (Lint, Test, Build) passes successfully.
* **Squash & Merge:** Always use "Squash and Merge" when merging into `main` to keep the primary history clean and readable.