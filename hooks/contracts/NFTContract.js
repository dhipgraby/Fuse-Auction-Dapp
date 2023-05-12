import { ethers } from 'ethers';
import NFTMockABI from './NFTMock.json';
import { NFT_ContractAddress } from './ContractAddresses';

export default class NFTContract {
    constructor() {
        this.contractAddress = NFT_ContractAddress;
        this.contractABI = NFTMockABI;
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

    async safeMint(to) {
        await this.checkConnect();
        const tx = await this.contract.safeMint(to);
        await tx.wait();
    }

    async mintWithTokenId(to, tokenId) {
        await this.checkConnect();
        const tx = await this.contract.mint(to, tokenId);
        await tx.wait();
    }

    async approveForAll(address) {
        await this.checkConnect();
        const tx = await this.contract.setApprovalForAll(address, true);
        await tx.wait();
    }

    async ownerOf(tokenId) {
        await this.checkConnect();
        const owner = await this.contract.ownerOf(tokenId);
        return owner;
    }
}
