const ObservableStore = require('obs-store')
const extend = require('xtend')

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
  checkShokkuNetworkStatus () {
    return fetch('https://api.shokku.com/v1/services/status/sparrow')
      .then(response => response.json())
      .then((parsedResponse) => {
        this.store.updateState({
          shokkuNetworkStatus: parsedResponse,
        })
        return parsedResponse
      })
  }

  scheduleShokkuNetworkCheck () {
    if (this.conversionInterval) {
      clearInterval(this.conversionInterval)
    }
    this.conversionInterval = setInterval(() => {
      this.checkShokkuNetworkStatus()
    }, POLLING_INTERVAL)
  }
}

module.exports = ShokkuController
