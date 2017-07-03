module.exports = getBuyEthUrl

function getBuyEthUrl ({ network, amount, address }) {
  let url
  switch (network) {
    case '88':
      url = `https://bittrex.com/Market/Index?MarketName=BTC-UBQ`
      break

    case '9':
      url = 'https://github.com/kovan-testnet/faucet'
      break
  }
  return url
}
