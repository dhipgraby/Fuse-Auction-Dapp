//ALL FUNCTIONS FROM AUCTION CONTRACT

//ABI
import FuseAuctionABI from './FuseAuctionABI.json';

//CONTRACT ADDRESSE
const fuseAuctionAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

import { ethers } from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);

const fuseAuctionContract = new ethers.Contract(fuseAuctionAddress, FuseAuctionABI, provider);

export async function connectWallet() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
}

// CREATE ACTIONS

export async function createNativeAuction(itemId, biddingTime, minimumBid, nftContract) {
    const signer = provider.getSigner();
    const contractWithSigner = fuseAuctionContract.connect(signer);

    try {
        const tx = await contractWithSigner.createNativeAuction(itemId, biddingTime, minimumBid, nftContract);
        console.log('Transaction sent:', tx);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

// CREATE ERC20 AUCTION
export async function createERC20Auction(itemId, biddingTime, minimumBid, nftContract, tokenAddress) {
    const signer = provider.getSigner();
    const contractWithSigner = fuseAuctionContract.connect(signer);

    try {
        const tx = await contractWithSigner.createERC20Auction(itemId, biddingTime, minimumBid, nftContract, tokenAddress);
        console.log('Transaction sent:', tx);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

//BIT NATIVE TOKEN
export async function bid(auctionId, bidAmount) {
    const signer = provider.getSigner();
    const contractWithSigner = fuseAuctionContract.connect(signer);

    try {
        const tx = await contractWithSigner.bid(auctionId, { value: ethers.utils.parseEther(bidAmount) });
        console.log('Transaction sent:', tx);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

//BID ERC20 TOKEN
export async function bidERC20(auctionId, bidAmount) {
    const signer = provider.getSigner();
    const contractWithSigner = fuseAuctionContract.connect(signer);

    try {
        const tx = await contractWithSigner.bidERC20(auctionId, bidAmount);
        console.log('Transaction sent:', tx);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

//GETTERS FOR AUCTION

export async function fetchMarketAuctions() {
    try {
        const auctions = await fuseAuctionContract.fetchMarketAuctions();
        console.log('Auctions:', auctions);
    } catch (error) {
        console.error('Error fetching auctions:', error);
    }
}

export async function getAuctionId() {
    try {
        const auctionId = await fuseAuctionContract.getAuctionId();
        console.log('Auction ID:', auctionId);
    } catch (error) {
        console.error('Error fetching auction ID:', error);
    }
}


//CLAIM AUCTION

export async function claimAuction(auctionId) {
    const signer = provider.getSigner();
    const contractWithSigner = fuseAuctionContract.connect(signer);

    try {
        const tx = await contractWithSigner.claimAuction(auctionId);
        console.log('Transaction sent:', tx);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

export async function getAuction(auctionId) {
    try {
        const auction = await fuseAuctionContract.getAuction(auctionId);
        console.log('Auction details:', auction);
    } catch (error) {
        console.error('Error fetching auction details:', error);
    }
}



//WITHDRAW

export async function withdrawPendingReturns() {
    const signer = provider.getSigner();
    const contractWithSigner = fuseAuctionContract.connect(signer);

    try {
        const tx = await contractWithSigner.withdrawPendingReturns();
        console.log('Transaction sent:', tx);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

export async function withdrawPendingFunds(auctionId) {
    const signer = provider.getSigner();
    const contractWithSigner = fuseAuctionContract.connect(signer);

    try {
        const tx = await contractWithSigner.withdrawPendingFunds(auctionId);
        console.log('Transaction sent:', tx);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

//CHECK FUNDS

//CHECK PENDING NATIVE TOKEN FUNDS FOR BIDDERS THAT NOT WIN
export async function checkPendingReturn(userAddress) {
    try {
        const pendingReturn = await fuseAuctionContract.checkPendingReturn(userAddress);
        console.log('Pending return for', userAddress, ':', ethers.utils.formatEther(pendingReturn));
    } catch (error) {
        console.error('Error checking pending return:', error);
    }
}

//CHECK PENDING ERC20 TOKEN FUNDS FOR BIDDERS THAT NOT WIN

export async function checkPendingFund(auctionId, userAddress) {
    try {
        const pendingFund = await fuseAuctionContract.checkPendingFund(auctionId, userAddress);
        console.log('Pending fund for', userAddress, 'in auction', auctionId, ':', ethers.utils.formatEther(pendingFund));
    } catch (error) {
        console.error('Error checking pending fund:', error);
    }
}
