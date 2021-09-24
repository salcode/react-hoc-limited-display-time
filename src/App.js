import './App.css';
import { useReducer } from 'react';
import Notification from './components/Notification.js';
import WithLimitedTimeRender from './hocs/WithLimitedTimeRender';

import reducer from './reducer.js';

const NotificationWithLimitedTimeRender = WithLimitedTimeRender(
  Notification,
  2, // seconds
);

function App() {
  const [ state, dispatch ] = useReducer(reducer, {});
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter Notification in the Text Field
        </p>
      </header>

      <input
        onChange={
          e => dispatch({
            type: 'setMyValue',
            value: e.target.value
          })
        }
      />

      <NotificationWithLimitedTimeRender
        message={state.myValue ?? ''}
      />
    </div>
  );
}

export default App;
