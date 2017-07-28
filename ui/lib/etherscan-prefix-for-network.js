module.exports = function (network) {
  const net = parseInt(network)
  let prefix
  switch (net) {
    case 88: // main net
      prefix = ''
      break
    case 9: // test net
      prefix = 'testnet.'
      break
    default:
      prefix = ''
  }
  return prefix
}
