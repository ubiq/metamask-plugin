module.exports = function (address, network) {
  const net = parseInt(network)
  let link
  switch (net) {
    case 88: // main net
      link = `https://rpc1.ubiqscan.io/en/address/${address}`
      break
    case 9: // rinkeby test net
      link = `http://rinkeby.ubiqscan.io/address/${address}`
      break
    default:
      link = ''
      break
  }

  return link
}
