var assert = require('assert')
var linkGen = require('../../ui/lib/ubiqscan-link/account-link')

describe('account-link', function () {
  it('adds rpc1 prefix to main network', function () {
    var result = linkGen('account', '88')
    assert.notEqual(result.indexOf('ubiqscan.io'), -1, 'main network included')
    assert.notEqual(result.indexOf('account'), -1, 'account included')
  })

  xit('adds rinkeby prefix to test network', function () {
    var result = linkGen('account', '9')
    assert.notEqual(result.indexOf('testnet.ubiqscan'), -1, 'test network included')
    assert.notEqual(result.indexOf('account'), -1, 'account included')
  })
})
