import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";

const { Header, Content } = Layout;

function App() {
  // searchNFTs("car");
  // getNFTTrades("0x745b8158a7e95aaad14e1a58dea21b9f808c93a9");
  // getContractNFTs("0x745b8158a7e95aaad14e1a58dea21b9f808c93a9");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
