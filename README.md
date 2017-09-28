# Angular2-base-project

This is a simple Angular2 project with some functionalities added to start working on it. 

# TODO
- [x] Folder structure
- [x] Production and development builds
- [x] Development server with Livereload
- [x] Navbar
- [x] Routing
- [ ] Implements almost one: component, service, pipe, directive, module
	- [x] component
	- [ ] service
	- [ ] pipe
	- [ ] directive
	- [x] module
- [x] Bootstrap
- [ ] Sass
- [ ] End-to-end tests
- [ ] Angular i18n support
- [x] Docker
- [x] Node.js server to Prod version
- [x] Following the best practices.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  e2e/
  	app.e2e-spec.ts
	app.po.ts
	tsconfig.json
  node-server/
  	app.js
	package.json
	.gitignore
  src/
  	app/
		about/
			about.component.html
			about.component.ts
		contact/
			contact.component.html
			contact.component.ts
		home/
			home.component.html
			home.component.ts
		navbar/
			navbar.component.html
			navbar.component.ts
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
  Dockerfile
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

Run `ng build` to build the project. Use the `-prod` flag for a production build.

The build artifacts will be stored in the `node-server/dist/` directory.

## Run build with Node server

Go to folder node-server

Run `npm install`

Run locally `node app.js`

## Run Dockerfile

Build image `docker build -t angular2 .` 

Run image `docker run -it -p 3000:3000 angular2`

