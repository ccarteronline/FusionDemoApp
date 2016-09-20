# Fusion Demo App

Show objects populated through the view. Edit the objects and add new objects. Updates happen dynamically. Send objects to a MongoDB instance. Retrieve objects from MongoDB using a UUID number.

### Installation
You must have MongoDB installed in order for SQLess database functionality to work

```sh
$ npm install
```

```sh
$ bower install
```

### Running
```sh
$ gulp server
```
This runs jshint when changes are made to specific files. The application is running on `localhost:7803`

### Unit Testing
```sh
$ gulp unitTest
```
or
```sh
karma start
```

The `coverage` directory will show files for the coverage reporter. Open up the `index.html` file within the web browser folder. I like to use live-server to have changes detected.

### Protractor Tests (E2E)
  - Update `webdriver-manager update`
  - Start `webdriver-manager start`
  - Start a new command window and run protractor with: `gulp e2e` (also the same as typing: `protractor conf.js`)

### Changes
  - Add Protractor tests
  - Add unit testing with Karma
  - Add JSON structure to MongoDB instance
  - Retrieve JSON structure from MongoDB instance using the uuid number
  - Change theme colors
