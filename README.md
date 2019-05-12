# FNB 💸

[![npm version](https://badge.fury.io/js/fnb.svg)](https://badge.fury.io/js/fnb)

Fully-featured API wrapper for the FNB online banking platform.

## Overview

- **Easy to use:** The package offers a powerful, yet easy to understand and use api.
- **Promise based:** All asynchronous operations are promise based, no more callback hell.
- **Extensive functionality:** Offers both read and write operations, anything a human can do - so can this puppy.
- **Typesafe:** All methods have been typed.

## Features

- [ ] username / password based authentication.
- [ ] accounts listing
- [ ] cards listing
- [ ] account transaction history
- [ ] account detailed balance
- [ ] transfers
- [ ] payments history
- [ ] once-off payments

## Install

```sh
yarn add fnb
```

## Usage

### Quickstart

```ts
import FNB from 'fnb';

const username = 'username';
const password = 'password';

const fnb = new FNB({ username, password });

const accounts = await fnb.accounts();
const cards = await fnb.cards();
const transactions = await fnb.transactions('account-number');
const balance = await fnb.balance('account-number');
```

### API

#### `FNB`

##### `constructor(auth: Auth): FNB`

The `auth` argument accepts the following fields:

| Key        | Type   | Default | Note                                           |
| ---------- | ------ | ------- | ---------------------------------------------- |
| `username` | String | `null`  | Username to authenticate the requests with.    |
| `password` | String | `null`  | Corresponding password for the above username. |

---

_Please note that this is an unofficial API and that I am in no way, shape or form affiliated with First National Bank! Use or misuse of this library is entirely your responsibility._

# License

The MIT License (MIT)

Copyright (c) 2016 Nusrath Khan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
