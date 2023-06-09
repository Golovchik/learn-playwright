# learn-playwright
learn-playwright

# Extensions:
1.Playwright Test for VSCode
2.Ctrl+Shift+P and "install playwright" as result: 
    npm init playwright@latest --yes -- --quiet --browser=chromium --browser=firefox --browser=webkit

# Inside that directory, you can run several commands:

  ## npx playwright test
    Runs the end-to-end tests.

  ## npx playwright test --ui
    Starts the interactive UI mode.

  ## npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  ## npx playwright test example
    Runs the tests in a specific file.

  ## npx playwright test --debug
    Runs the tests in debug mode.

  ## npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    ## npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨   


 # headless
 playwright.config.js => defineConfig => use: {headless: false,}

 # selectors
 https://playwright.dev/docs/api/class-selectors

 # run test
 npx playwright test

 # codegen
 npx playwright codegen
