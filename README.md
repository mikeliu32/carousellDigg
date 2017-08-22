# Digg / Reddit Challenge

Depolyed to Heroku:  [https://calm-beyond-42384.herokuapp.com/](https://calm-beyond-42384.herokuapp.com/)

## Installation

```bash
$ git clone https://github.com/mikeliu32/carousellDigg.git
$ cd carousellDigg

$ npm install
```


## Usage

### Develoment Mode

```bash
$ npm run dev
```

This will start webpack-dev-server with hot reloading enabled.

Open `http://localhost:3000` in the browser for development.

### Run for production (locally)
Build the project first:
```bash
$ npm run build
```

Then, start to run the app:
```bash
$ npm run start
```

Finally, the app will be running on `http://localhost:3000`.

### Testing
```bash
$ npm run test
```

Will run Jest for testing.

### Linting

```bash
$ npm run lint
```

Followed [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with several custom rules in this project.


## Implementation


## Test Results

Test Suites: 5 passed, 5 total

Tests:       15 passed, 15 total

Snapshots:   4 passed, 4 total

Time:        2.51s

Test converage:

File              |  % Stmts | % Branch |  % Funcs |  % Lines
------------------|----------|----------|----------|----------
All files         |      100 |      100 |      100 |      100
[actions]         |      100 |      100 |      100 |      100
   diggActions.js |      100 |      100 |      100 |      100
[components]      |      100 |      100 |      100 |      100
   app.js         |      100 |      100 |      100 |      100
   diggItem.js    |      100 |      100 |      100 |      100
   topicInput.js  |      100 |      100 |      100 |      100
[reducers]        |      100 |      100 |      100 |      100
   diggReducer.js |      100 |      100 |      100 |      100
