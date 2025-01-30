require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

const URL = process.env.URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    polygon: {
      url: URL || "",
      accounts: [PRIVATE_KEY],
    }
  }
};

//0xD6242CA8Df1BfB786411B1aBb908FC2Aa6684f61