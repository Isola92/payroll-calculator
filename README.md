# Payroll Calculator

## Dependencies

- React - A requirement in the specification.
- Typescript - To quickly find errors and simplify refactoring.
- Cypress - Integration tests for the views.
- Jest - Unit testing logic outside of components.
- Esbuild - Fast builds
- start-server-and-test - To start the app, run the tests and then shut it down in one simple command.

## Notes

I still import React even though I use a version with the new transform. This is because esbuild doesn't support it without some additional tinkering.

## Problems

Can't start cypress? I'm on Windows right now so I had to set the path to the cypress binary with backslashes.

Try changing to a normal looking path.

## TODO

- Pass in the port for the devserver and reference that variable everywhere.

CSS preprocessor for esbuild.
