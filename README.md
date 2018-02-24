# Vanity-ETH

[![Build Status](https://img.shields.io/travis/bokub/vanity-eth/master.svg?style=flat-square)](https://travis-ci.org/bokub/vanity-eth)
[![License](https://img.shields.io/badge/license-MIT-f68084.svg?style=flat-square)](https://raw.githubusercontent.com/bokub/vanity-eth/master/LICENSE)
[![Maintainability](https://api.codeclimate.com/v1/badges/818874f09ea56c310072/maintainability)](https://codeclimate.com/github/bokub/vanity-eth/maintainability)

Browser-based ETH vanity address generator

Just type [`git.io/veth`](https://git.io/veth) to use it ⚡️

[![Vanity-ETH](https://i.imgur.com/lv6Gej5.png)](https://git.io/veth)


## Usage

First of all, visit [`git.io/veth`](https://git.io/veth)

Enter the prefix of your choice, then click 'generate' to start. Your browser is going to generate a ton of random 
addresses until one of them starts with your prefix.

Once an address is found, you can reveal the private key, or click the 'save' button to download a password-encrypted keystore file.

You can increase the number of working threads to reach higher speeds, or decrease it if you computer struggles.


## Security

As explained above, everything is computed in your browser. Nothing ever leaves your machine, or even your browser tab.

Once the web page is loaded, you can turn off the internet and continue playing.

You can also download the latest build of Vanity-ETH [here](https://git.io/veth-dl)
and use it completely offline.

Vanity-ETH uses a cryptographically secure pseudorandom number generator (CSPRNG) to generate Ethereum addresses.

The keystore file is encrypted with a AES-128-CTR cipher using the BKDF2-SHA256 derivation function with 65536 hashing rounds.


## Performance

For some reason, the performance of Vanity-ETH can vary a lot from a browser to another. Right now, Chrome seems to be
the one providing the best results.

Using Vanity-ETH on your phone or tablet will work, but don't expect to reach the speed of a good old computer.


## Compatibility

Any address generated with Vanity-ETH is ERC-20 compatible, which means you can use it for an ICO, an airdrop, or just
to withdraw your funds from an exchange.

The keystore file is 100% compatible with MyEtherWallet, MetaMask, Mist, and geth.


## Local development

Install dependencies

```sh
npm i
```

Run the dev-sever while you code

```sh
npm run dev
```

Build the project (optional)

```sh
npm run build
```

The Travis CI bot 🤖 is in charge of building and deploying Vanity-ETH to Github pages.

## Tips

`0xAceBabe64807cb045505b268ef253D8fC2FeF5Bc`