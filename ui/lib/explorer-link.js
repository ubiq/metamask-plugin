module.exports = function (hash, network) {
  const net = parseInt(network)
  let prefix
  switch (net) {
    case 88: // main net
      prefix = 'rpc1.'
      break
    case 9: // rinkeby test net
      prefix = 'rinkeby.'
      break
    default:
      prefix = 'rpc1.'
  }

  return `http://${prefix}ubiqscan.io/tx/${hash}`
}
