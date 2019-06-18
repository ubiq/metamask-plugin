const ObservableStore = require('obs-store')
const extend = require('xtend')
const log = require('loglevel')

// every ten minutes
const POLLING_INTERVAL = 10 * 60 * 1000

class ShokkuController {

  constructor (opts = {}) {
    const initState = extend({
      shokkuNetworkStatus: {},
    }, opts.initState)
    this.store = new ObservableStore(initState)
  }

  //
  // PUBLIC METHODS
  //

  // Responsible for retrieving the status of Infura's nodes. Can return either
  // ok, degraded, or down.
  async checkShokkuNetworkStatus () {
    const response = await fetch('https://api.shokku.com/v1/services/status/')
    const parsedResponse = await response.json()
    this.store.updateState({
      infuraNetworkStatus: parsedResponse,
    })
    return parsedResponse
  }

  scheduleShokkuNetworkCheck () {
    if (this.conversionInterval) {
      clearInterval(this.conversionInterval)
    }
    this.conversionInterval = setInterval(() => {
      this.checkShokkuNetworkStatus().catch(log.warn)
    }, POLLING_INTERVAL)
  }
}

module.exports = ShokkuController
