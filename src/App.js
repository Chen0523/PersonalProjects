import logo from './logo.svg';
import './App.css';
import Headbar from "./components/Headbar";
import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";




function App() {
  return (
      <Router>
        <div className="App">
            <header>
                <Headbar/>
            </header>
            <div className="App-main">
                <Routes></Routes>
            </div>
        </div>
      </Router>

  );
}

export default App;
