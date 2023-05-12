import { ethers } from 'ethers';
import FuseAuctionABI from './FuseAuctionABI.json';
import { fuseAuctionAddress } from './ContractAddresses';

export default class FuseAuctionContract {
    constructor() {
        this.contractAddress = fuseAuctionAddress;
        this.contractABI = FuseAuctionABI;
    }

    async connect() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        this.signer = provider.getSigner();
        this.contract = new ethers.Contract(this.contractAddress, this.contractABI, this.signer);
    }

    async checkConnect() {
        if (!this.contract) {
            await this.connect();
        }
    }

    async createNativeAuction(itemId, biddingTime, minimumBid, nftContract) {
        await this.checkConnect();
        const tx = await this.contract.createNativeAuction(itemId, biddingTime, minimumBid, nftContract);
        await tx.wait();
    }

    async createERC20Auction(itemId, biddingTime, minimumBid, nftContract, tokenAddress) {
        await this.checkConnect();
        const tx = await this.contract.createERC20Auction(itemId, biddingTime, minimumBid, nftContract, tokenAddress);
        await tx.wait();
    }

    async bid(auctionId, bidAmount) {
        await this.checkConnect();
        const tx = await this.contract.bid(auctionId, { value: ethers.utils.parseEther(bidAmount) });
        await tx.wait();
    }

    async bidERC20(auctionId, bidAmount) {
        await this.checkConnect();
        const tx = await this.contract.bidERC20(auctionId, bidAmount);
        await tx.wait();
    }

    async fetchMarketAuctions() {
        await this.checkConnect();
        const auctions = await this.contract.fetchMarketAuctions();
        return auctions;
    }

    async getAuctionId() {
        await this.checkConnect();
        const auctionId = await this.contract.getAuctionId();
        return auctionId;
    }

    async getAuction(auctionId) {
        await this.checkConnect();
        const auction = await this.contract.auctionsMapping(auctionId);
        return auction;
    }

    async claimAuction(auctionId) {
        await this.checkConnect();
        const tx = await this.contract.claimAuction(auctionId);
        await tx.wait();
    }

    async withdrawPendingReturns() {
        await this.checkConnect();
        const tx = await this.contract.withdrawPendingReturns();
        await tx.wait();
    }

    async withdrawPendingFunds(auctionId) {
        await this.checkConnect();
        const tx = await this.contract.withdrawPendingFunds(auctionId);
        await tx.wait();
    }

    async checkPendingReturn(userAddress) {
        await this.checkConnect();
        const pendingReturn = await this.contract.pendingReturns(userAddress);
        const funds = ethers.utils.formatEther(pendingReturn)
        return funds;
    }

    async checkPendingFund(auctionId, userAddress) {
        await this.checkConnect();
        const pendingFund = await this.contract.checkPendingFund(auctionId, userAddress);
        const funds = ethers.utils.formatEther(pendingFund)
        return funds;
    }
}
