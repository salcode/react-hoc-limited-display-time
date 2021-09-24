import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter Announcement in the Text Field
        </p>
      </header>

      <input
        onChange={e => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
