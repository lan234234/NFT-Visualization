import { useState } from "react";
import "./App.css";
import { Button, Layout, Input } from "antd";

const { Header, Content } = Layout;

function App() {
  // searchNFTs("car");
  // getNFTTrades("0x745b8158a7e95aaad14e1a58dea21b9f808c93a9");
  // getContractNFTs("0x745b8158a7e95aaad14e1a58dea21b9f808c93a9");

  const [searchText, setSearchText] = useState("");

  return (
    <Layout Style={{ height: "100vh" }}>
      <Header>
        <div style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
          NFT Browser
        </div>
      </Header>
      <Content
        style={{ height: "calc(100% - 64px", padding: 20, overflowY: "auto" }}
      >
        <Input.Group compact>
          <Input
            style={{ width: 500 }}
            placeholder="Enter a NFT contract address to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button type="primary">Search</Button>
        </Input.Group>
      </Content>
    </Layout>
  );
}

export default App;
