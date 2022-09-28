/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("hardhat-gas-reporter");
module.exports = {
  solidity: "0.8.9",
  gasReporter: {
    enabled: true
  }
};
