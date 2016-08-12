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
This runs jshint when changes are made to specific files.

### Testing
You must have karma installed on your machine.
```sh
$ karma start karma.conf.js
```
The `coverage` directory will show files for the coverage reporter. Open up the `index.html` file within the web browser folder. I like to use live-server to have changes detected.

### Changes
  - Add unit testing with Karma
  - Add JSON structure to MongoDB instance
  - Retrieve JSON structure from MongoDB instance using the uuid number
  - Change theme colors
