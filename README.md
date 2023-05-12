## Fuse Auction Dapp 🎮

FuseAuction is a decentralized auction platform built on Ethereum that allows users to create auctions for NFTs and bid using either native Fuse or ERC20 tokens. The contract interacts with both NFT and ERC20 contracts to ensure seamless auction creation and bidding.

## Live Dapp version on Vercel - Fuse Sparknet testnet 🚀

Live Vercel application here 👉: [Live Fuse Auction](https://fuse-auction-dapp.vercel.app/)

Notes: 
- You will need to use Deployer address from ERC20 and NFT contract to be able to mint.
- Add Fuse Sparknet to metamask & Switch

You can add it atomatically from : 

[ChainList Fuse Spark](https://chainlist.org/chain/123)

or manually from [Fuse Website - Network Details](https://docs.fuse.io/docs/basics/getting-started-with-fuse/network-details)

Use Faucet to get testnet funds if need from [Sparknet Faucet](https://get.fusespark.io/)

## Table of Contents
- Features
- Installation
- Running Tests
- Usage

## Features ✨

- Supports NFT and ERC20 contracts
- Create auctions using either Ether or ERC20 tokens
- Bid on auctions using either Ether or ERC20 tokens
- Withdraw pending returns for losing bidders
- Claim auctions and transfer assets for auction winners

## Installation 📦
Clone the repository:
<pre>
git clone https://github.com/dhipgraby/Fuse-Auction-Dapp
</pre>

Change into the directory and install dependencies:

<pre>
cd Fuse-Auction-Dapp
yarn
</pre>

Replace contract addresses under hooks/contracts/ContractAddresses.js
Required addresses: 
 - Auction Contract
 - NFT Contract
 - ERC20 Contract

## Usage 📚

**Before using: 🔍**

- Mint nft from Deployer address
- ApproveForAll Auction contract address in NFT contract
- Send ERC20 to each bidder addresses you wish
- Approve spend amount from each bidder address to Auction contract, so it can move the ERC20 tokens. 

**Creating an auction**
To create an auction, call the createNativeAuction or createERC20Auction function, passing in the following parameters:

itemId: The ID of the NFT you want to auction
biddingTime: The duration of the auction in seconds
minimumBid: The starting price of the auction
nftContract: The address of the NFT contract
For createERC20Auction, also provide:

tokenAddress: The address of the ERC20 token used for bidding
Bidding on an auction
To bid on an auction, call the bid or bidERC20 function, passing in the following parameters:

auctionId: The ID of the auction you want to bid on
For bidERC20, also provide:

bidAmount: The amount of ERC20 tokens you want to bid
Withdrawing pending returns
To withdraw pending returns, call the withdrawPendingReturns or withdrawPendingFunds function.

For withdrawPendingFunds, also provide:

auctionId: The ID of the auction you want to withdraw funds from
Claiming an auction
To claim an auction, call the claimAuction function, passing in the following parameters:

auctionId: The ID of the auction you want to claim
## Functions 📝
- createNativeAuction
- createERC20Auction
- bid
- bidERC20
- fetchMarketAuctions
- withdrawPendingReturns
- withdrawPendingFunds
- claimAuction
- getAuctionId
- checkPendingFunds

## FuseAuction - Solidity Smart Contracts for Auction  

Containing all what is need to deploy your own Auction contracts. 

- Deploy NFT contract
- Deploy ERC20 contract
- Deploy Auction contract

Follow installation instructions to deploy your own contracts for the **Fuse Auction Dapp**

[FuseAuction Solidity Smart Contracts](https://github.com/dhipgraby/FuseAuction)

