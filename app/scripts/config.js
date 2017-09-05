const MAINET_RPC_URL = 'https://sparrow1.ubiqscan.io'
const TESTNET_RPC_URL = 'https://testrpc1.ubiqscan.io'

global.METAMASK_DEBUG = 'GULP_METAMASK_DEBUG'

module.exports = {
  network: {
    mainnet: MAINET_RPC_URL,
    testnet: TESTNET_RPC_URL,
  },
  networkNames: {
    3: 'Ropsten',
    4: 'Rinkeby',
    42: 'Kovan',
  },
}
