const MAINET_RPC_URL = 'https://mainnet.api.shokku.com'
const TESTNET_RPC_URL = 'https://testnet.api.shokku.com'
const LOCALHOST_RPC_URL = 'http://localhost:8588'

global.METAMASK_DEBUG = 'GULP_METAMASK_DEBUG'

module.exports = {
  network: {
    localhost: LOCALHOST_RPC_URL,
    mainnet: MAINET_RPC_URL,
    testnet: TESTNET_RPC_URL,
  },
  networkNames: {
    88: 'Ubiq Net',
    9: 'Test Net',
  },
}
