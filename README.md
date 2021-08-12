# xe-react-app
XE property addition Client Application.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Core Technology Stack
Below you can find the core modules and technologies used during the application lifecycle.

### Runtime
- [node.js](https://nodejs.org/en/docs) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [npm](https://docs.npmjs.com) - The default package manager for the JavaScript runtime environment Node.js.
For more information about npm configuration, package.json tags and lock files, you can visit the following npm documentation pages:
- [Configuring npm](https://docs.npmjs.com/cli-documentation/configuring-npm)
- [npm-package.json](https://docs.npmjs.com/files/package.json)
- [npm-package-lock.json](https://docs.npmjs.com/configuring-npm/package-lock-json.html)
- [eslint](https://eslint.org/docs/user-guide/getting-started) - Pluggable JavaScript linter.

### Development
- [react](https://reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces.
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - Declarative Routing for React.js
- [react-final-form](https://final-form.org/docs/react-final-form/getting-started) - React form
- [@material-ui](https://www.material.io/resources/get-started#design) - For components
- [cors-anywhere](https://www.npmjs.com/package/cors-anywhere) - CORS Anywhere is a NodeJS proxy which adds CORS headers to the proxied request.

### Testing
- [mocha](https://mochajs.org) - Feature-rich JavaScript test framework running on Node.js.
- [enzyme](https://github.com/enzymejs/enzyme) - JavaScript Testing utilities for React.
- [chai](https://www.chaijs.com) - BDD/TDD assertion library for Node.js.

### Linting
- [eslint](https://eslint.org/docs/user-guide/getting-started) - Pluggable JavaScript linter.
For the used version of eslint and eslint plugins please check the "dependencies" tag at the application package.json.
Eslint configuration is based on the following files, placed at the project root directory:
- .eslintrc.json: [Configuration file](https://eslint.org/docs/user-guide/configuring) for eslint plugins, rules and options.
- .eslintignore: Configuration for files and directories that should be excluded from linting.

### Transpilation
- [babel](https://babeljs.io/docs/en) - The compiler for next generation JavaScript.
Babel configuration can be found at .babelrc file under root directory.
For more information about babel configurations, you can visit the official [Configure Babel](https://babeljs.io/docs/en/configuration) page. For the babel version and the used plugins and presets, check the "devDependencies" tag at the application package.json.

## Set up
Install [Node.js](https://nodejs.org)
Open a terminal  from root project(xe-react-app) and execute npm install

### Running the app
Run:
```bash
npm start
```
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Run:
```bash
node server.js
```
Runs CORS Anywhere on http://localhost:8080 in order to proxy requests

## Project Structure
Below you can find a short template of the basic project structure.

    .
    |-- ...
    |-- xe-react-app
    |-- public                  # create React app files
    |-- src                     # Core components for constructing and running the app
    |   |-- components          # Containing application components grouped by form sections 
    |   |-- |--AreaSection      # Includes area - location input components. (Contains an Inpt field and a section for displayig api results)         
    |   |-- |--BasicFields      # Includes field components for other ad characteristics. Dispays fields for required - or non required user input       
    |   |-- |--InputFieldTypes  # Field type components (radio, select, text)       
    |   |-- |--UploadSection    # Upload image section       
    |   |-- helpers             # helper utils
    |   |-- |--rooting          # App routes
    |   |-- |--validation       # Form field validation
    |   |-- |--commonUtils      
    |   |-- |--history          # Helper function for changing route
    |   |-- |--service          # Helper function for performing request
    |   |-- pages               # App routes
    |   |-- |-- AdsComponent    # Component rendered after submission to display user list of submitions
    |   |-- |-- App.js          # Main page containing a form(react-final-form) for user to insert values for adding a property. It is sectioned in three areas. Basic characteristics, Area election and image upload
    |   |-- App.css             # Application custom css
    |   |-- image.jpg           # Application background image
    |   |-- index.css           # Basic page css
    |   |-- index.js            # File containig react dom element
    |-- node_modules
    |-- tools
    |   |-- mochaSetup.js       # mocha env configuration file
    |-- .babelrc                # babel configuration file
    |-- .eslintrc.json          # eslint configuration file
    |-- ....
    |-- .mocharc.yml            # mocha env configuration file to check at runtime
    |-- ...
    |-- ...
    |-- server.js              # cors-anywhare proxy configuration file

### Notes
When on http://localhost:3000 a form for adding a new property will be displayed.
 The form has three sections:
 1. Section for adding general property characteristics
 2. Section for adding location. AreaSection component uses react hooks to perform requests to the API for fetching location resuts
 3. Section for image upload
 
 When values are added and user clicks submit he is redirected to a page that contains a table with his submissions
 
 
 Some fields are required, validations is on submission.
 Local Storage has been used to store user submission
 
 
 (see [Project Structure](#project-structure) for more)
