var assert = require('assert')
var linkGen = require('../../ui/lib/explorer-link')

describe('explorer-link', function () {
  it('adds rpc1 prefix to main network', function () {
    var result = linkGen('hash', '88')
    assert.notEqual(result.indexOf('rpc1'), -1, 'rpc1 injected')
  })

  it('adds rinkeby prefix to rinkeby test network', function () {
    var result = linkGen('hash', '9')
    assert.notEqual(result.indexOf('rinkeby'), -1, 'rinkeby injected')
  })
})
