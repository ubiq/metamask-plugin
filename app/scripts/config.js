const MAINET_RPC_URL = 'https://rpc1.ubiqscan.io'
const TESTNET_RPC_URL = 'http://localhost:8588'

global.METAMASK_DEBUG = 'GULP_METAMASK_DEBUG'

module.exports = {
  network: {
    mainnet: MAINET_RPC_URL,
    testnet: TESTNET_RPC_URL,
  },
}
