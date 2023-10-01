# Next Crypto

Next Crypto uses aes-gcm encryption for encrypting and decrypting with Next.JS (created for running in edge runtime)
You can encrypt any sensitive data and store it where you need (session data in cookies, etc..)
You need only 1 required argument with your secret.

## Installation

Using NPM:

`npm install next-crypto`

Using Yarn: 

`yarn add next-crypto`

Using Pnpm:

`pnpm add next-crypto`

## Usage

```javascript
import NextCrypto from 'next-crypto';

const crypto = new NextCrypto('secret key');

const encrypted = crypto.encrypt('hello!');
const decrypted = crypto.decrypt(encrypted);
```