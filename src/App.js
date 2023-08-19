import { useState } from "react";
import "./App.css";
import { Button, Layout, Input, List, Card, message } from "antd";
import { getContractNFTs } from "./utils";

const { Header, Content } = Layout;

function App() {
  // searchNFTs("car");
  // getNFTTrades("0x745b8158a7e95aaad14e1a58dea21b9f808c93a9");
  // getContractNFTs("0x745b8158a7e95aaad14e1a58dea21b9f808c93a9");

  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState("");
  const [nfts, setNfts] = useState("");

  const handleSearch = async () => {
    if (searchText === "") {
      return;
    }

    setLoading(true);
    try {
      const data = await getContractNFTs(searchText);
      setNfts(data.result);
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

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
        <Input.Group>
          <Input
            style={{ width: 500 }}
            placeholder="Enter a NFT contract address to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button type="primary">Search</Button>
        </Input.Group>
        <List
          style={{
            marginTop: 20,
            height: "calc(100% - 52px)",
            overflow: "auto",
          }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={[1, 2, 3]}
          renderItem={(nft) => (
            <List.Item key={nft}>
              <Card title={nft} />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}

export default App;
