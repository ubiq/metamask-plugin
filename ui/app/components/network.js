const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits

module.exports = Network

inherits(Network, Component)

function Network () {
  Component.call(this)
}

Network.prototype.render = function () {
  const props = this.props
  const networkNumber = props.network
  let providerName
  try {
    providerName = props.provider.type
  } catch (e) {
    providerName = null
  }
  let iconName, hoverText

  if (networkNumber === 'loading') {
    return h('span.pointer', {
      style: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      },
      onClick: (event) => this.props.onClick(event),
    }, [
      h('img', {
        title: 'Attempting to connect to blockchain.',
        style: {
          width: '27px',
        },
        src: 'images/loading.svg',
      }),
      h('i.fa.fa-caret-down'),
    ])
  } else if (providerName === 'mainnet') {
    hoverText = 'Ubiq Network'
    iconName = 'ethereum-network'
  } else if (providerName === 'testnet') {
    hoverText = 'Test Network'
    iconName = 'rinkeby-test-network'
  } else {
    hoverText = 'Unknown Private Network'
    iconName = 'unknown-private-network'
  }

  return (
    h('#network_component.pointer', {
      title: hoverText,
      onClick: (event) => this.props.onClick(event),
    }, [
      (function () {
        switch (iconName) {
          case 'ethereum-network':
            return h('.network-indicator', [
              h('.menu-icon.diamond'),
              h('.network-name', {
                style: {
                  color: '#039396',
                }},
              'Ubiq Net'),
              h('i.fa.fa-caret-down.fa-lg'),
            ])
          case 'rinkeby-test-network':
            return h('.network-indicator', [
              h('.menu-icon.golden-square'),
              h('.network-name', {
                style: {
                  color: '#e7a218',
                }},
              'Test Net'),
              h('i.fa.fa-caret-down.fa-lg'),
            ])
          default:
            return h('.network-indicator', [
              h('i.fa.fa-question-circle.fa-lg', {
                style: {
                  margin: '10px',
                  color: 'rgb(125, 128, 130)',
                },
              }),

              h('.network-name', {
                style: {
                  color: '#AEAEAE',
                }},
              'Private Network'),
              h('i.fa.fa-caret-down.fa-lg'),
            ])
        }
      })(),
    ])
  )
}
