import './App.css';
import { useReducer } from 'react';
import Notification from './components/Notification.js';
import reducer from './reducer.js';

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

      <div>{state.myValue ?? ''}</div>

      <Notification />
    </div>
  );
}

export default App;
