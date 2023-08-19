import logo from "./logo.svg";
import "./App.css";
import { Layout } from "antd";

const { Header, Content } = Layout;

function App() {
  // searchNFTs("car");
  // getNFTTrades("0x745b8158a7e95aaad14e1a58dea21b9f808c93a9");
  // getContractNFTs("0x745b8158a7e95aaad14e1a58dea21b9f808c93a9");
  return (
    <Layout Style={{ height: "100vh" }}>
      <Header></Header>
      <Content></Content>
    </Layout>
  );
}

export default App;
