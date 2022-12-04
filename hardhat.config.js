require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
    },
    polygon_mumbai: {
      chainId: 80001,
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    },
    goerlieth: {
      chainId: 5,
      url: "https://eth-goerli.g.alchemy.com/v2/vMpDTQtSr5XNNt1oIvFwt3xKSPdimnEu",
      accounts: [process.env.PRIVATE_KEY]
    },
    testavax: {
      chainId: 43113,
      url: "https://avalanche-fuji.infura.io/v3/36d27bb261cb4b36bbdf7d212012f229",
      accounts: [process.env.PRIVATE_KEY]
    },
    testbinance: {
      chainId: 97,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      goerli:  process.env.GOERLI_API_KEY,
      bscTestnet: process.env.BNBTEST_API_KEY,
      avalancheFujiTestnet: process.env.AVAXTEST_API_KEY,
    }
  },


  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};