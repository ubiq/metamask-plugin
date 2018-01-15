# Sparrow Plugin

[![Build Status](https://circleci.com/gh/ubiq/ubiq-plugin.svg?style=shield&circle-token=a1ddcf3cd38e29267f254c9c59d556d513e3a1fd)](https://circleci.com/gh/ubiq/sparrow-plugin) 
[![Coverage Status](https://coveralls.io/repos/github/ubiq/sparrow-plugin/badge.svg?branch=master)](https://coveralls.io/github/ubiq/sparrow-plugin?branch=master) 
[![Greenkeeper badge](https://badges.greenkeeper.io/MetaMask/metamask-extension.svg)](https://greenkeeper.io/)

[MetaMask's](https://github.com/MetaMask) brother built for [Ubiq](https://ubiqsmart.com) network.

## Developing Compatible Dapps

If you're a web dapp developer, we've got two types of guides for you:

### New Dapp Developers

- We recommend this [Learning Solidity](https://karl.tech/learning-solidity-part-1-deploy-a-contract/) tutorial series by Karl Floersch.
- We wrote a (slightly outdated now) gentle introduction on [Developing Dapps with Truffle and MetaMask](https://medium.com/metamask/developing-ethereum-dapps-with-truffle-and-metamask-aa8ad7e363ba).

### Current Dapp Developers

- If you have a Dapp, and you want to ensure compatibility, [here is our guide on building MetaMask-compatible Dapps](https://github.com/MetaMask/faq/blob/master/DEVELOPERS.md)

## Building locally

- Install [Node.js](https://nodejs.org/en/) version 6.3.1 or later.
- Install local dependencies with `npm install`.
- Install gulp globally with `npm install -g gulp-cli`.
- Build the project to the `./dist/` folder with `gulp build`.
- Optionally, to rebuild on file changes, run `gulp dev`.
- To package .zip files for distribution, run `gulp zip`, or run the full build & zip with `gulp dist`.

Uncompressed builds can be found in `/dist`, compressed builds can be found in `/builds` once they're built.

## Development

```bash
npm install
npm start
```

### Running Tests

Requires `mocha` installed. Run `npm install -g mocha`.

Then just run `npm test`.

You can also test with a continuously watching process, via `npm run watch`.

You can run the linter by itself with `gulp lint`.

## Build for Publishing

```bash
npm run dist
```

#### Writing Browser Tests

To write tests that will be run in the browser using QUnit, add your test files to `test/integration/lib`.

## About documentation

For more documentation you can go directly to MetaMask wiki (everything that applies there, will apply directly to Sparrow).

## License

    Copyright 2018 MetaMaks Authors 
    Copyright 2018 Ubiq Authors

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.