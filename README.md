# @subjektifylabs/subjektify-hardhat

[![NPM Version](http://img.shields.io/npm/v/@subjektifylabs/subjektify-hardhat.svg?style=flat)](https://www.npmjs.com/package/@subjektifylabs/subjektify-hardhat)

A Subjektify plugin for integrating Hardhat into Subjektify projects seamlessly.

## Features

- **Integration with Subjektify**: Seamlessly integrates Hardhat into the Subjektify runtime environment.
- **Unified Configuration**: Combines Hardhat configuration within the Subjektify configuration.
- **Run Hardhat Tasks**: Execute Hardhat tasks (`check`, `clean`, `compile`, `node`, `test`, `vars`) through Subjektify.

## Installation

You can install `@subjektifylabs/subjektify-hardhat` via npm:

```bash
npm install --save-dev @subjektifylabs/subjektify-hardhat
```

or via yarn:

```bash
yarn add --dev @subjektifylabs/subjektify-hardhat
```

## Usage

To use the `subjektify-hardhat` plugin, include it in your Subjektify configuration file and extend the runtime environment with Hardhat.

### Example Configuration

Here’s a basic example of how to configure `subjektify-hardhat` in your `subjektify.config.js` or `subjektify.config.ts`:

```ts title="subjektify.config.ts"
import { SubjektifyConfig } from 'subjektify';
import "@subjektifylabs/subjektify-hardhat";

const config: SubjektifyConfig = {
    namespace: "my.dapp",
    version: "1.0.0",
    license: "MIT",
    hardhat: {
        solidity: "0.8.4",
        networks: {
            hardhat: {
                chainId: 1337
            },
            localhost: {
                url: "http://127.0.0.1:8545",
                chainId: 1337
            }
        }
    },
    build: {
        sources: ["src/models"],
        outputDirectory: "artifacts",
    },
    codegen: [
        {
            target: "client",
            language: "typescript",
            outputDirectory: "src/client"
        },
        {
            target: "contract",
            language: "solidity",
            outputDirectory: "contracts"
        }
    ]
};

export default config;
```

## Tasks

```bash
npx subjektify check
npx subjektify clean
npx subjektify compile
npx subjektify node
npx subjektify test
npx subjektify vars
```

These commands will run the respective Hardhat tasks within the Subjektify environment.

## Environment Extensions

The `subjektify-hardhat` plugin extends the Subjektify runtime environment by adding Hardhat. This allows you to leverage Hardhat's powerful features within Subjektify's unified environment.

## Contributing

We welcome contributions from the community! If you’d like to contribute to `subjektify-hardhat`, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Implement your changes and add tests if applicable.
4. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
