require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");

module.exports = {
  zksolc: {
    version: "1.2.0",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },

  zkSyncDeploy: {
    zkSyncNetwork: "https://zksync2-testnet.zksync.dev",
    ethNetwork: "goerli",
  },

  networks: {
    hardhat: {
      zksync: true,
    },
  },

  solidity: {
    version: "0.8.16",
  },
};
