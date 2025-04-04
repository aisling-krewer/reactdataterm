import "./App.css";
import "./cyberpunk.css";

function Home() {
    return (
      <main>
        <section className="App cyberpunk inverse">
        <h1 className="cyberpunk">Welcome to DATATERM™</h1>
        <br />
        <p className="unstyle">
        Download, print or check out the news with DATATERM™ by Ziggurat. <br />
        Last update: 16 minutes ago.
        </p>
        </section>
        <section className="App cyberpunk black">
        <button className="cyberpunk blue">Latest Headlines</button>
        <button className="cyberpunk blue">Night City Information</button>
        <button className="cyberpunk blue">Body Lotto Results</button>
        </section>
        </main>
    );
  }
  
  

export default Home;

