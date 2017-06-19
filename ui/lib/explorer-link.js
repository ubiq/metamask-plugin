module.exports = function (hash, network) {
  const net = parseInt(network)
  let prefix
  switch (net) {
    case 88: // main net
      prefix = 'rpc1.'
      break
<<<<<<< HEAD
    case 9: // rinkeby test net
      prefix = 'rinkeby.'
=======
    case 9: // test net
      return `http://rinkeby.ubiqscan.io/tx/${hash}`
>>>>>>> 96af372859225b4c40a164d7483ed481f2e5862f
      break
    default:
      prefix = 'rpc1.'
  }

  return `http://${prefix}ubiqscan.io/tx/${hash}`
}
