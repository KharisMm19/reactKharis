import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h6>
          Nama : Kharis Muhaimin
          <p>NIM : 1841720090</p>
        </h6>
        <h4>
          Hallo, Kharis disini..
        </h4>
        <a
          className="App-link"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
      </header>
    </div>
  );
}

export default App;
