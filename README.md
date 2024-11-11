# Booking test task

This project is a testing setup using Cypress for end-to-end testing of booking website.

## Scripts

### Running Tests

- **Run tests in browser**: Executes end-to-end tests with a visible browser, allowing you to see interactions in real-time.
  ```bash
  npm run test:e2e
  ```
- **Run tests in headless mode**:
  ```bash
  npm run test:e2e:headless
  ```
## Project structure
```bash
cypress/
├── integration/
│   ├── features/
│   │   ├── *.feature                     # Feature files containing test scenarios
│   │   └── {featureDirName}/             # Directories named after features, containing related step definitions
│   └── pages/                            # Page Object files describing elements and actions for different pages
├── support/                              # Includes constants and helper functions for the project
├── screenshots/                          # Stores screenshots if a test fails
```
### Detailed structure

- cypress/integration/features: Contains .feature files, written in Gherkin syntax, defining the test scenarios.

- cypress/integration/features/{featureDirName}: Contains step definition files, implementing the logic for steps in the .feature files with the same name. This allows each feature file to have its own directory of related steps.

- cypress/integration/pages: Stores page object files. These files help maintain a clean structure by abstracting page elements and actions, making tests more readable and maintainable.

- cypress/support: Contains constants and helper functions used across the project to keep tests organized and reduce redundancy.

- cypress/screenshots: Captures and stores screenshots automatically if any test fails. This is useful for debugging and reviewing test failures.
