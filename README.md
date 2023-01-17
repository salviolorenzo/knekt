## Structure

-   app.js: entry point
-   api: controller layer - routing
-   config: settings + env variables
-   services: service layer - business logic
-   models: data access layer: database models
-   scripts: npm scripts
-   subscribers: async event handlers
-   test: test suites

## Core Functions needed

1. Create / Update basic user information
2. Track runs using location services
3. Draw runs on a map
    - Estimate distance, elevation, time to complete
4. Connect to external APIs (Garmin Connect, Fitbit, Apple Health)

## Additional Functions

1. Optionally see other users' runs
2. Schedule runs, allow other users to join
