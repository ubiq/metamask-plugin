module.exports = function (address, network) {
  const net = parseInt(network)
  let link
  switch (net) {
    case 88: // main net
      link = `https://ubiqscan.io/en/address/${address}`
      break
    case 9: // test net
      link = `http://test.ubiqscan.io/address/${address}`
      break
    default:
      link = ''
      break
  }

  return link
}
