module.exports = function (network) {
  const net = parseInt(network)
  let prefix
  switch (net) {
    case 88: // main net
      prefix = 'mainnet1'
      break
    case 9: // test net
      prefix = 'testnet'
      break
    default:
      prefix = 'mainnet1'
  }
  return prefix
}
