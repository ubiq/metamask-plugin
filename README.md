# Sparrow Plugin

[MetaMask's](https://github.com/MetaMask) brother built for [Ubiq](https://ubiqsmart.com) instead of Ethereum.

## Building locally

- Install [Node.js](https://nodejs.org/en/) version 6.3.1 or later.
- Install local dependencies with `npm install`.
- Install gulp globally with `npm install -g gulp-cli`.
- Build the project to the `./dist/` folder with `gulp build`.
- Optionally, to rebuild on file changes, run `gulp dev`.
- To package .zip files for distribution, run `gulp zip`, or run the full build & zip with `gulp dist`.

Uncompressed builds can be found in `/dist`, compressed builds can be found in `/builds` once they're built.

### Running Tests

Requires `mocha` installed. Run `npm install -g mocha`.

Then just run `npm test`.

You can also test with a continuously watching process, via `npm run watch`.

You can run the linter by itself with `gulp lint`.

## Development

```bash
npm install
npm start
```

## Build for Publishing

```bash
npm run dist
```

#### Writing Browser Tests

To write tests that will be run in the browser using QUnit, add your test files to `test/integration/lib`.

## About documentation

For more information and documentation go directly to MetaMask wiki (it will contain the most accurate information).