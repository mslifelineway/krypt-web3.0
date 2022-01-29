// https://eth-ropsten.alchemyapi.io/v2/c-jjiohLt3tzUy0JgoBxRrgZVY_hl9VH

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/c-jjiohLt3tzUy0JgoBxRrgZVY_hl9VH",
      accounts: [
        "363f1a15080a5f8f9e6e0a7aa0a9fbbab4e5d2507763021664daa45e3e288181",
      ],
    },
  },
};
