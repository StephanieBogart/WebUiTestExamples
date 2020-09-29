TestCafe Web UI Tests

This is a sample repo for TestCafe Web UI Tests using a test website hosted by Parasoft.com.

# Setup
1. `npm install testcafe`

# Running tests
## All Tests
Specify the browser to run on a single browser, or just select testcafe to run on all installed supported browsers.
`testcafe chrome` 
## Specific tests
Specify specific tests by referencing the test name following `-t`.
`testcafe chrome -t 'User can successfully log in'`