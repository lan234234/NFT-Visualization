const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjYwMTE0YmIzLWQyMWYtNDVmOC1iYjJlLTMyMDU0ZWI3MDcwNCIsIm9yZ0lkIjoiMzUzODMyIiwidXNlcklkIjoiMzYzNjYyIiwidHlwZUlkIjoiOTE2Zjc5NTUtOWQ4MS00ZjMzLTliZmMtMzM1YzM1NDQ0YmJiIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2OTI0NjQxOTYsImV4cCI6NDg0ODIyNDE5Nn0.jziHJ7hwDEMJgeJwe5X7zL0QPFD67Y89yBdR3aQa3BU";

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

// export const searchNFTs = async (searchText) => {
//   const url = new URL(`${origin}/api/v2/nft/search`);
//   url.searchParams.append("chain", "eth");
//   url.searchParams.append("format", "decimal");
//   url.searchParams.append("q", searchText);
//   url.searchParams.append("filter", "name");
//   url.searchParams.append("limit", "12");

//   const response = await fetch(url, {
//     headers: {
//       accept: "application/json",
//       "X-API-KEY": apiKey,
//     },
//   });
//   return response.json();
// };

// export const getNFTTrades = async (tokenAddress) => {
//   const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
//   url.searchParams.append("chain", "eth");
//   url.searchParams.append("marketplace", "opensea");
//   url.searchParams.append("limit", "20");

//   const response = await fetch(url, {
//     headers: {
//       accept: "application/json",
//       "X-API-KEY": apiKey,
//     },
//   });
//   return response.json();
// };

// export const getContractNFTs = async (tokenAddress) => {
//   const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
//   url.searchParams.append("chain", "eth");
//   url.searchParams.append("format", "decimal");
//   url.searchParams.append("limit", "20");

//   const response = await fetch(url, {
//     headers: {
//       accept: "application/json",
//       "X-API-KEY": apiKey,
//     },
//   });
//   return response.json();
// };
