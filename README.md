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

Technical Stack:
- Express (serve the built static files)
- React
- Redux (with react-redux)
- Babel
- Webpack (build the js bundle and also stylesheet)
- jest, enzyme (for testing)
- eslint

I use `Redux` to manage the data flow and hold the state. The state of the application contains an array which hold all the Diggs, and the total Digg count:

```javascript
{
    diggCount: 0,
    diggList: []
}
```

And a single Digg structure is:

```javascript
{
    id: 0,
    topic: '',
    upvote: 0,
    downvote: 0
}
```



There's three actions that representing three different operations to the app state:

`ADD_DIGG` : Append a new digg into the diggList.

`UPVOTE_DIGG` : Find the digg from the digglist with a given ID, and update the upvote count.

`DOWNVOTE_DIGG` : Find the digg from the digglist with a given ID, and update the downvote count.


> Alternatively, we can have a different approach of the data structure.
> Instead of saving the Diggs into an array, we can save the Diggs in a key-value Object,
> and an array that keep the keys and their order only.
> This will help when querying a digg, since simply look up the key-value pair will be faster than loop throught the entire list.



The view is construted with three components:

`<App />` : The main container of the app. Get the app state and dispatches from props (which are injected by the appRoot), and assemble the child components.

`<TopicInput />` : The area to insert a new topic, which has a textarea and a submit button. The input value is kept as its own state, and will be passed to the onSubmitNewTopic callback when click the submit button.

`<DiggItem />` : A single Digg item. Display the digg's id, topic, upvote/downvote count, and will trigger onVoteDigg callback when the vote button is clicked.



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


## Screenshot

![screenshot](http://i.imgur.com/2Yi2krM.png)
