var assert = require('assert')
var linkGen = require('../../ui/lib/account-link')

describe('account-link', function () {
  it('adds rpc1 prefix to main network', function () {
    var result = linkGen('account', '88')
    assert.notEqual(result.indexOf('rpc1'), -1, 'rpc1 included')
    assert.notEqual(result.indexOf('account'), -1, 'account included')
  })

  it('adds rinkeby prefix to rinkeby test network', function () {
    var result = linkGen('account', '9')
    assert.notEqual(result.indexOf('rinkeby'), -1, 'rinkeby included')
    assert.notEqual(result.indexOf('account'), -1, 'account included')
  })
})
