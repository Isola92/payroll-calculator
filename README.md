# Payroll Calculator

[![Node.js CI](https://github.com/Isola92/payroll-calculator/actions/workflows/node.js.yml/badge.svg)](https://github.com/Isola92/payroll-calculator/actions/workflows/node.js.yml)

## Hosting

Available through GitHub Pages [here](https://isola92.github.io/payroll-calculator/).

## Commands

`npm run dev` - Builds the application and starts a webserver at localhost:8000.

`npm run build` - Bundles the css and ts(x) files.

`npm run test` - Runs unit tests with Jest.

`npm run ci-test` - Starts the devserver and runs cypress tests. Would be used for Github action but haven't gotten that to work yet.

`tsc` - Check types. Esbuild only transpiles so this needs to run separately.

## Dependencies

- React - A requirement in the specification.
- Typescript - To quickly find errors and simplify refactoring.
- Cypress - Integration tests for the views.
- Jest - Unit testing logic outside of components.
- Esbuild - Fast builds
- start-server-and-test - To start the app, run the tests and then shut it down in one simple command.

## Folder structure

I chose to structure files by type rather than view in this project. I find that this works well for small and mid-sized applications.

CSS has one main file for shared variable definitions and common styles. Otherwise use one sheet for each component.

- `views` - React component tied to a particular route. Acts as an entrypoint for a part of the application.
- `components` - React components that are initiated through a view or other components.
- `constants` - Enums and in this case also some hardcoded data.
- `definitions` - TS types.
- `reducers` - Reducer functions to update state in the app based on actions.
- `helpers` - Instead of creating a util folder with random functions I like to group functions with helper classes.

## Notes

I still import React even though I use a version with the new transform. This is because esbuild doesn't support it without some additional tinkering.

## Problems

Can't start cypress? I'm on Windows right now so I had to set the path to the cypress binary with backslashes. Try changing to a "normal" path.

## TODO

- Pass in the port for the devserver and reference that variable where needed.

- Copy index.html to bin during builds. Then I can add the bin folder to gitignore. Currently I need to commit changes to index.html for the deploy to work.

- Make the page look good :)

- Ensure unit tests aren't included in the bundle.

- Format decimals when presenting the value.
