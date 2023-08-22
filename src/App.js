import { useState } from "react";
import "./App.css";
import { Button, Layout, Input, List, Card, message } from "antd";
import { getContractNFTs } from "./utils";
import NftCard from "./components/NftCard";
import ContractTrades from "./components/ContractTrades";

const { Header, Content } = Layout;

function App() {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [nfts, setNfts] = useState([]);

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
    <Layout style={{ height: "100vh" }}>
      <Header>
        <div style={{ fontSize: 16, fontWeight: 600, color: "white" }}>
          NFT Browser
        </div>
      </Header>
      <Content
        style={{ height: "calc(100% - 64px)", padding: 20, overflowY: "auto" }}
      >
        <Input.Group compact>
          <Input
            style={{ width: 500 }}
            placeholder="Enter a NFT contract address to search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
          <ContractTrades tokenAddress={searchText} />
        </Input.Group>
        <List
          style={{
            marginTop: 20,
            height: "calc(100% - 52px)",
            overflow: "auto",
          }}
          loading={loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={nfts}
          renderItem={(nft) => <NftCard nft={nft} />}
        />
      </Content>
    </Layout>
  );
}

export default App;
