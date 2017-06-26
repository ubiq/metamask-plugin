const MAINET_RPC_URL = 'https://rpc1.ubiqscan.io'
const TESTNET_RPC_URL = 'http://testrpc1.ubiqscan.io'

global.METAMASK_DEBUG = 'GULP_METAMASK_DEBUG'

module.exports = {
  network: {
    mainnet: MAINET_RPC_URL,
    testnet: TESTNET_RPC_URL,
  },
}
