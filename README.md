# Paul is camping

## Solution Considerations
I chose Vuetify component library for this solution because it has very good documentation.
Also Vue JS comes with 1st party state-management and router libraries thus reducing boiler plate code by a LOT.

My solution is responsive, should be mobile/tablet/computer friendly. I also added dark mode for accesibility.

I saved all my backend api logic in a central store. This way its easy to share data across components. Mutations are synchronous while Actions are async.

## Known Trade-Offs
I purposely didn't write this code in TS to save on time. I also didn't give user feedback in-case the api-call fails, though error is being caught and logged into the console. I only spent only one night to implement this, only a basic unit test is included. No e2e has been made.

## Solution Description
*Spinners are going to be shown while fetching backend data.*

1. The home page will contain the high level statistics. Data will be fetched when the component is created.
2. A card will displayed for each survey, with a link to the navigate to a detailed route.
3. Whenever we reach the "details" route, app will fetch detailed data. Data will be stored in the central store. If end-user "refreshes" the page whilst on this route, the app will alert the user to go back to home page to select a survey.
4. In the details page, expansion panels are used to show/hide the questions under each theme. Convenience buttons to expand/collapse all questions are provided.
5. Ratings are converted to 5-stars for visual appeal, the exact figure will be shown when you hover on the star graphics.
6. I modularized my components wherever I can to keep the code clean.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
