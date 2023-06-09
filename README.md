# Cryptoinform
⚠ Our services be terminated on 2023/06/01. We apologize for any inconvenience caused and appreciate your support.
<kbd>
![cover](https://github.com/NorthBei/cryptoinform/assets/15665709/7ae8c643-0187-4ef7-b01f-fb303481f99d)
</kbd>
## Project Intro


### Introduction

CryptoInform is a powerful platform designed to keep you informed about valuable crypto investment opportunities. Say goodbye to missing out on lucrative ICOs, IDOs, IEOs, and airdrops, as our platform delivers continuous notifications directly to your Telegram.

Getting started is quick and effortless. In just 3 minutes, you can begin receiving essential notifications that can help you seize profitable investments.

Let's Get Valuable Crypto Investment Opportunities Notifications with CryptoInform!

### Mission

Make great crypto information as easy as drinking water, everywhere, for everyone.

### Vision

Getting rid of people swamped with tons of chores, making everyones’ life could be more convenient and be focus on more valuable things.
將瑣碎的小事撿起，讓每個人能夠更專注在更有價值的事物



#### Here's how it works:
<img width="1129" alt="image" src="https://github.com/NorthBei/cryptoinform/assets/15665709/f5c73ca6-c8be-44bf-869f-a2183ccc4b5d">

**1.Join our Telegram Bot:**

Join our bot on Telegram by simply click the provided link to connect instantly or searching for @cryptoinform_bot on Telegram.

**2.Select Your Preferences:**

In bot, use `/setting` command to open the website to customize your subscription by choosing the items that align with your interests. Whether it's Bybit IEO/Launchpad, Bybit Flexible Staking, 99airdrops airdrop, Coinbase ICO or other exciting projects, you can tailor your notifications to suit your investment strategy.

**3.Get Informed:**

Our Telegram bot will keep you updated during critical phases, such as `Snapshot Period`, `Subscription Period`, `Distribution Period`, and `Launch Period`. You'll receive timely alerts that ensure you never miss a beat.


#### Here is about the pricing:
<img width="861" alt="image" src="https://github.com/NorthBei/cryptoinform/assets/15665709/98a5ee00-3011-4234-b982-d1a0e912439f">

Wondering about the cost? Rest assured, our services are absolutely free. Developed by a fellow crypto enthusiast who missed out on a 35x Launchpad project (KASTA IEO), CryptoInform is driven by the desire to share this valuable tool with others in the community.


Take advantage of our free notifications and gain a competitive edge in the crypto market.
Join CryptoInform and never miss any investment opportunity. 


© 2022 CryptoInform. All rights reserved.  Made in Taiwan with ❤️.

### Person In charge
- Website Dev & Design by NorthBei from [Metartemis](https://metartemis.co)

### Relative Link
- cryptoinform
  - [home page](https://cryptoinform.netlify.app/)
  - [settings page](https://cryptoinform.netlify.app/settings/)

### Screenshots/Film

**Home Page**

| PC | Moblie |
|-|-|
|![image](https://github.com/NorthBei/cryptoinform/assets/15665709/46b8fdbd-a2cb-4165-be45-8d2f5dce514c)|![image](https://github.com/NorthBei/cryptoinform/assets/15665709/cf6b70d0-7e47-4fcd-9731-5bc15bd09e30)|

**Settings Page**

- PC

| Before Login | After Login |
|-|-|
|<img width="1552" alt="image" src="https://github.com/NorthBei/cryptoinform/assets/15665709/d3f8cd37-af6c-48ef-8e32-cc1724f1b3c5">|<img width="1552" alt="image" src="https://github.com/NorthBei/cryptoinform/assets/15665709/ffebac20-a784-4df5-8032-0b295217e9e7">|

- Mobile

| Before Login | After Login |
|-|-|
|<img width="302" alt="image" src="https://github.com/NorthBei/cryptoinform/assets/15665709/76081d02-d4cf-4a38-ade8-b6026fbe29f4">|<img width="298" alt="image" src="https://github.com/NorthBei/cryptoinform/assets/15665709/db7ed018-d4de-487b-82f8-bcc00f680d40">|

**Telegram Bot**

| Join Bot | Get Tutorial | Setting Bot & Received Inform |
|-|-|-|
|![Screenshot_20230601-050108](https://github.com/NorthBei/cryptoinform/assets/15665709/fc41075d-ebf4-4870-8aff-0f7192bda580)|![Screenshot_20230601-050035](https://github.com/NorthBei/cryptoinform/assets/15665709/a2a8d3b4-604a-4fa7-89dc-f70bacd534be)|![Screenshot_20230601-050043](https://github.com/NorthBei/cryptoinform/assets/15665709/b01acc9b-dcf3-4baf-9710-bb7c31b37a5c)|


## Development Instruction

### Environment

|Service|Version|
|-|-|
|Node.js|v18.16.0|
|yarn| v1.22.19|

### Getting Started

Install packages & Run the development server:

```zsh
yarn install
// http  or https
yarn dev or yarn server:ssl
```

### Project setup

Install all package
```zsh
yarn install
```

### Start Development

Run **http** web server at http://localhost:3000 for development
<img width="1552" alt="image" src="https://github.com/NorthBei/cryptoinform/assets/15665709/cf835792-7810-4feb-95f9-ed513579692b">

```zsh
yarn dev
```

For running **https** web server at https://localhost for development, we have 2 options
<img width="1552" alt="image" src="https://github.com/NorthBei/cryptoinform/assets/15665709/c92755b3-5deb-4c5f-b22e-8254e4390296">

1. Run custom server with ssl directly

```zsh
// Run https web server with self-signed custom ssl certificates at https://localhost 
yarn server:ssl
```

2. Run next https server, and have a https proxy server, map 3000 port (http) to 443 port (https)

```zsh
// Run http web server at http://localhost:3000 
yarn dev
// Run https proxy server then map 3000 port (http) to 443 port (https) with self-signed custom ssl certificates at https://localhost 
yarn server:proxy
```

### Lint all files

Run lint for all `.js`, `.ts`, `.tsx` files by eslint

```zsh
yarn lint
```

### Build Production (Next.js SSG)

Run below command to build this project by Next.js Static Site Generation (SSG) service.<br>
In Next.js 13, we could run `next build` directly, instead of `next export` after setting up `next.config.js`.

```zsh
yarn build
```


## Reference
- [如何在MacOS上建立Local HTTPS Server & 使用Custom Domain存取網站 with Node.js](https://northbei.medium.com/%E5%A6%82%E4%BD%95%E5%9C%A8macos%E6%9C%AC%E5%9C%B0%E7%AB%AF%E5%BB%BA%E7%AB%8Bhttps-server-%E4%BD%BF%E7%94%A8custom-domain-%E5%AD%98%E5%8F%96%E7%B6%B2%E7%AB%99-with-next-js-364103684669)

