import './App.css';
import './cyberpunk.css';
function App() {
  return (
    <div>
    <section className="App cyberpunk black">
      <h1 className="cyberpunk">Welcome to DATATERM™</h1>
      <br />
      <p className="unstyle">Download, print or check out the news with DATATERM™ by Ziguratt. <br />
      Last update: 16 minutes ago. </p>
    </section>
        <section className="App cyberpunk inverse">
        <button className="cyberpunk blue">Latest Headlines</button>
        <button className="cyberpunk blue">Night City Information</button>
        <button className="cyberpunk blue">Body Lotto Results</button>
      </section>
      </div>
  );
}

export default App;
