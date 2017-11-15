module.exports = function (network) {
  const net = parseInt(network)
  console.log("NET" + net +":"+network)
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

/*
module.exports = function (network) {
  const net = parseInt(network)
  alert(net + ":" + network);
  let prefix
  switch (net) {
    case 1: // main net
      prefix = 'mainnet1'
      break
    case 3: // ropsten test net
      prefix = 'ropsten.'
      break
    case 4: // rinkeby test net
      prefix = 'rinkeby.'
      break
    case 42: // kovan test net
      prefix = 'kovan.'
      break
    default:
      prefix = 'mainnet1'
  }
  return prefix
}*/
