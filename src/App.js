import './App.css';
import './cyberpunk.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Login from './login';
function App() {
  return (
    <main>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
      </main>
  );
}

export default App;
