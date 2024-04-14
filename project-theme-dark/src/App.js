import logo from './logo.svg';
import './App.css';
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DarkMode />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Copyright © 2024 Guilherme Carvalho. All Rights Reserved.
        </p>
    
      </header>
    </div>
  );
}

export default App;
