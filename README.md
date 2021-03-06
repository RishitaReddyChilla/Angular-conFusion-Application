# ConFusion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

- Create a local folder named 'json-server'.
- Create a folder named 'public' inside 'json-server' folder.
- Copy the 'images' folder from assets folder (in 'src' folder) to the 'public' folder.
- Copy the 'db.json' file from assets folder (in 'src' folder) to the 'json-server' folder.
- Now, use the json-server to fetch data by navigating to the json-server folder on command prompt and run `json-server --watch db.json -d 2000`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
- Copy all the files from dist/ directory and paste inside the 'json-server/public/' directory.
- Navigate to `http://localhost:3000/` to view the application.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



