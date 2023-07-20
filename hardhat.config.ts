import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  gasReporter: {
    enabled: true,
    currency: 'USD',
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    token: 'ETH',
    gasPriceApi: 'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice',
    // token: 'BNB',
    // gasPriceApi: 'https://api.bscscan.com/api?module=proxy&action=eth_gasPrice',
    // token: 'MATIC',
    // gasPriceApi: 'https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice',
    // token: 'AVAX',
    // gasPriceApi: 'https://api.snowtrace.io/api?module=proxy&action=eth_gasPrice',
    // token: 'HT',
    // gasPriceApi: 'https://api.hecoinfo.com/api?module=proxy&action=eth_gasPrice',
    // token: 'MOVR',
    // gasPriceApi: 'https://api-moonriver.moonscan.io/api?module=proxy&action=eth_gasPrice',
  },
};

export default config;
