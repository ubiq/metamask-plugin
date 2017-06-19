module.exports = function (hash, network) {
  const net = parseInt(network)
  switch (net) {
    case 88: // main net
      return `http://ubiqscan.io/tx/${hash}`
      break
    case 9: // test net
      return `http://rinkeby.ubiqscan.io/tx/${hash}`
      break
    default:
      return `http://ubiqscan.io/tx/${hash}`
  }
}
