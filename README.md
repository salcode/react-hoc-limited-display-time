# ReactJS Higher Order Component (HOC) to Limit How Long a Component is Rendered

Think of a notification that is displayed but then disappears after a given number of seconds.

The Higher Order Component (HOC) is called `WithLimitedTimeRender()` (found in `src/hocs/WithLimitedTimeRender.js`) takes two parameters:

- `WrappedComponent` the component to be rendered
- `delayUntilHideInSeconds` the number of seconds to render the component

Each time the props passed into the component are updated, the `WrappedComponent` is again displayed for the given number of seconds.

![react-hoc-limited-display-time](https://user-images.githubusercontent.com/5194588/134728924-3a5f7fbc-438d-4af0-9e8a-72b5455ab3e1.gif)

## Built With

This project was created with [Create React App](https://github.com/facebook/create-react-app).

## Running the Project

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
