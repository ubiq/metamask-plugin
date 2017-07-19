const prefixForNetwork = require('./etherscan-prefix-for-network')

module.exports = function (hash, network) {
  const prefix = prefixForNetwork(network)
  return `http://${prefix}ubiqscan.io/en/tx/${hash}`
}
