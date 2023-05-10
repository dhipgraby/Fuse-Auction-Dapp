//ABI
import FuseAuctionABI from './FuseAuctionABI.json';
import { fuseAuctionAddress } from './ContractAddresses';
import { ethers } from 'ethers';

async function connectContract() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const fuseAuctionContract = new ethers.Contract(fuseAuctionAddress, FuseAuctionABI, provider);

    return { signer, fuseAuctionContract }
}

// CREATE ACTIONS

export async function createNativeAuction(itemId, biddingTime, minimumBid, nftContract) {
    const { signer, fuseAuctionContract } = await connectContract();
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
    const { signer, fuseAuctionContract } = await connectContract();
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
    const { signer, fuseAuctionContract } = await connectContract();
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
    const { signer, fuseAuctionContract } = await connectContract();
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
    const { fuseAuctionContract } = await connectContract();
    try {
        const auctions = await fuseAuctionContract.fetchMarketAuctions();
        console.log('Auctions:', auctions);
    } catch (error) {
        console.error('Error fetching auctions:', error);
    }
}

export async function getAuctionId() {
    const { fuseAuctionContract } = await connectContract();
    try {
        const auctionId = await fuseAuctionContract.getAuctionId();
        return auctionId;
    }
    catch (error) {
        console.error('Error fetching auction ID:', error);
    }
}

// GET BY ID
export async function getAuction(auctionId) {
    const { fuseAuctionContract } = await connectContract();
    try {
        const auction = await fuseAuctionContract.auctionsMapping(auctionId);

        const nftId = auction.itemId.toString()
        const highestBid = auction.highestBid.toString()
        const auctionEndTime = auction.auctionEndTime


        const current = {
            owner: auction.seller,
            nftContract: auction.nftContract,
            tokenContract: (auction.ERC20Contract == 0x0000000000000000000000000000000000000000) ? 'No ERC20 auction' : auction.ERC20Contract,
            nftId: nftId,
            highestBid: ethers.utils.formatEther(highestBid),
            highestBidder: (auction.highestBidder == 0x0000000000000000000000000000000000000000) ? 'No bidder' : auction.highestBidder,
            auctionEndTime: auctionEndTime,
            ended: auction.ended,
            isERC20: auction.isERC20,
        }

        console.log(current);

        return current
    } catch (error) {
        console.error('Error fetching auction details:', error);
    }
}

//CLAIM AUCTION

export async function claimAuction(auctionId) {
    const { signer, fuseAuctionContract } = await connectContract()
    const contractWithSigner = fuseAuctionContract.connect(signer);
    try {
        const tx = await contractWithSigner.claimAuction(auctionId);
        console.log('Transaction sent:', tx);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

//WITHDRAW

export async function withdrawPendingReturns() {
    const { signer, fuseAuctionContract } = await connectContract();
    const contractWithSigner = fuseAuctionContract.connect(signer);

    try {
        const tx = await contractWithSigner.withdrawPendingReturns();
        console.log('Transaction sent:', tx);
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

export async function withdrawPendingFunds(auctionId) {
    const { signer, fuseAuctionContract } = await connectContract();
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
