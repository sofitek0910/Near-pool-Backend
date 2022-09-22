const crypto = require('crypto');

function encrypt3DES(data, key) {
 const md5Key = crypto.createHash('md5').update(key).digest("hex").substr(0, 24);
 const cipher = crypto.createCipheriv('des-ede3', md5Key, '');

 let encrypted = cipher.update(data, 'utf8', 'base64');
 encrypted += cipher.final('base64');
 return encrypted;
}

function decrypt3DES(data, key) {
 const md5Key = crypto.createHash('md5').update(key).digest("hex").substr(0, 24);
 const decipher = crypto.createDecipheriv('des-ede3', md5Key, '');

 let encrypted = decipher.update(data, 'base64', 'utf8');
 encrypted += decipher.final('utf8');
 return encrypted;
}

// const TERRA_SEED = decrypt3DES("wNGkDc9ZSAiWm4Y2L+Fog2xev8DC/hJLoiEWB7m01PGIYye/McmorgyAz1NiNiEZjRZXKY+Cd8Gut8pCIYMkZICPwohWzk0pwI9X/9xeR1j2Lh8y3ZmhP1o+/6huNG3LfDtECahzO0Ngnl2Xl2u2ugMYJgEIKYoZYZ7Yj16Pjhg8lnp5K+Ts/Pxj8Pyx3EMdQiHGRJa/X/fit+Sp58pJIA==", "Thisisaprettyquity");

const CONTRACT_NAME = 'staking1.alenzertest.testnet'; /* TODO: fill this in! */
function getConfig (env) {
  switch (env) {
    case 'production':
    case 'mainnet':
      return {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org'
      }
    case 'development':
    case 'testnet':
      return {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org'
      }
    default:
      throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`)
  }
}

const StableCoins=[
  {
    name: 'USDC',
    id: 'usd-coin',
    description: 'USD Coin',
    avatar: 'Usdc.svg',
    apr: 23.97,
    decimals: 6,
    stable: true,
    upcoming: false
  },
  {
    name: 'USDT',
    id: 'tether',
    description: 'USD Tether',
    avatar: 'Usdt.svg',
    apr: 23.97,
    decimals: 6,
    stable: true,
    upcoming: false
  },
  {
    name: 'DAI',
    id: 'dai',
    description: 'Dai',
    avatar: 'Dai.svg',
    apr: 23.97,
    decimals: 18,
    stable: true,
    upcoming: false
  },
  {
    name: 'USN',
    id: 'usn',
    description: 'USD NEAR',
    avatar: 'Usn.svg',
    apr: 23.97,
    decimals: 18,
    stable: true,
    upcoming: false
  },
  {
    name: 'wBTC',
    id: 'wrapped-bitcoin',
    description: 'Wrapped Bitcoin',
    avatar: 'Wbtc.svg',
    apr: 9.15,
    decimals: 8,
    stable: false,
    upcoming: false
  },
  {
    name: 'ETH',
    id: 'ethereum',
    description: 'Ethereum',
    avatar: 'Eth.png',
    apr: 9.15,
    decimals: 18,
    stable: false,
    upcoming: false
  },
  {
    name: 'wNEAR',
    id: 'wrapped-near',
    description: 'Wrapped Near',
    avatar: 'Wnear.svg',
    apr: 14.61,
    decimals: 24,
    stable: false,
    upcoming: false
  },
  {
    name: 'NEARt',
    description: 'Near Treasury (Cooming Soon)',
    avatar: 'Neart.svg',
    apr: 0,
    decimals: 24,
    stable: false,
    upcoming: true
  }
];

const TOKEN_ADDRESSES_TESTNET = [
  "ft.alenzertest.testnet",
  "other.alenzertest.testnet",
  "other.alenzertest.testnet",
  "other.alenzertest.testnet",
  "other.alenzertest.testnet",
  "other.alenzertest.testnet",
  "wrap.testnet",
];
const TOKEN_ADDRESSES_MAINNET = [
  "ft.alenzertest.testnet",
  "ft.alenzertest.testnet",
  "ft.alenzertest.testnet",
  "ft.alenzertest.testnet",
  "ft.alenzertest.testnet",
  "ft.alenzertest.testnet",
  "ft.alenzertest.testnet",
];
const TOKEN_ADDRESS = TOKEN_ADDRESSES_TESTNET;


const getCoinId = (coin) => {
  // export type COINTYPE = 'USDC' | 'USDT' | 'DAI' | 'USN' | 'wBTC' | 'ETH' | 'wNEAR' | 'NEARt';
  switch (coin) {
    case 'USDC': return 0;
    case 'USDT': return 1;
    case 'DAI': return 2;
    case 'USN': return 3;
    case 'wBTC': return 4;
    case 'ETH': return 5;
    case 'wNEAR': return 6;
    case 'NEARt': return 7;
  }
  return 0;
}

module.exports = {
  CONTRACT_NAME,
  TOKEN_ADDRESS,
  StableCoins,
  getCoinId,
  getConfig,
  encrypt3DES,
  decrypt3DES
}
