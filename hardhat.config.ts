import type { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-dependency-compiler';
import 'hardhat-interact';
import 'hardhat-abi-exporter';
import '@openzeppelin/hardhat-upgrades';

import * as dotenv from 'dotenv';

const testnet: Record<string, string> = {};
const mainnet: Record<string, string> = {};
dotenv.config({ path: '../.env.testnet', processEnv: testnet });
dotenv.config({ path: '../.env.mainnet', processEnv: mainnet });

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts/evm/solidity',
    tests: './contracts/evm/test',
    cache: './contracts/evm/cache',
    artifacts: './contracts/evm/artifacts',
  },
  networks: {
    // note: localhost / hardhat networks exist implicitly
    // hardhat is in-process (temporal) created for single commands. localhost is persisted by `npx hardhat node`
    hardhat: {
      mining: {
        auto: true,
        interval: 2000,
      },
    },
    testnet: {
      url: testnet.CHAIN_URI ?? '',
      accounts: testnet.DEPLOYER_PRIVATE_KEY == null ? [] : [testnet.DEPLOYER_PRIVATE_KEY],
      gasPrice: 70000000000,
      blockGasLimit: 6721975,
    },
    production: {
      url: mainnet.CHAIN_URI ?? '',
      accounts: mainnet.DEPLOYER_PRIVATE_KEY == null ? [] : [mainnet.DEPLOYER_PRIVATE_KEY],
    },
  },
  etherscan: {
    customChains: [
      {
        network: "milkomeda-c1-devnet",
        chainId: 200101,
        urls: {
          apiURL: "https://explorer-devnet-cardano-evm.c1.milkomeda.com/api",
          browserURL: "https://explorer-devnet-cardano-evm.c1.milkomeda.com"
        }
      },
      {
        network: "milkomeda-c1-mainnet",
        chainId: 2001,
        urls: {
          apiURL: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com/api",
          browserURL: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com"
        }
      }
    ],
    apiKey: {
      "milkomeda-c1-devnet": "NO_API_KEY_PROVIDED",
      "milkomeda-c1-mainnet": "NO_API_KEY_PROVIDED",
    }
  },
  dependencyCompiler: {
    paths: [
      '@paima/evm-contracts/contracts/PaimaL2Contract.sol',
    ],
  },
  abiExporter: {
    path: './contracts/evm/abi',
    runOnCompile: true,
    tsWrapper: true,
    clear: true,
    flat: false,
  },
  typechain: {
    outDir: './contracts/evm/typechain-types',
    target: 'ethers-v6',
    // https://github.com/dethcrypto/TypeChain/issues/849
    alwaysGenerateOverloads: false,
  },
};

export default config;
