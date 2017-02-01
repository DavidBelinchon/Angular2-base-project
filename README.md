# Angular2-base-project

This is a simple Angular2 project with some functionalities added to start working on it. 

# TODO
- [x] Folder structure
- [x] Production and development builds
- [x] Development server with Livereload
- [x] Navbar
- [x] Routing
- [ ] Implements almost one: component, service, pipe, directive, module
- [ ] Bootstrap
- [ ] Sass
- [ ] End-to-end tests
- [ ] Angular i18n support
- [ ] Tasks
	- [ ] Create new view, add route
	- [ ] Create new service
	- [ ] Create new pipe
	- [ ] Create new directive
- [ ] Docker
- [ ] Node.js server to Prod version
- [x] Following the best practices.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  e2e/
  	app.e2e-spec.ts
	app.po.ts
	tsconfig.json
  src/
  	app/
		about/
			about.component.html
			about.component.ts
			index.ts
		contact/
			contact.component.html
			contact.component.ts
			index.ts
		home/
			home.component.html
			home.component.ts
			index.ts
		navbar/
			navbar.component.html
			navbar.component.ts
			index.ts
		styles/
			app.component.css
		app.component.ts
		app.module.ts
	assets/
		.gitkeep
	enviroments/
		environment.ts
		environment.prod.ts
	favicon.ico
    index.html
	main.ts
	polyfills.ts
	styles.css
	test.ts
	tsconfig.json
  .editorconfig
  .gitignore
  angular-cli.json
  karma.conf.js
  package.json
  protractor.conf.js
  README.md
  tslint.json
```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.