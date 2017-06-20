module.exports = function (hash, network) {
  const net = parseInt(network)
  let prefix
  switch (net) {
    case 88: // main net
      prefix = ''
      break
    case 9: // rinkeby test net
      prefix = 'rinkeby.'
      break
    default:
      prefix = ''
  }

  return `http://${prefix}ubiqscan.io/en/tx/${hash}`
}
