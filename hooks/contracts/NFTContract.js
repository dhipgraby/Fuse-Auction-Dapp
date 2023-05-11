import { ethers } from 'ethers';
import NFTMockABI from './NFTMock.json';
import { NFT_ContractAddress } from './ContractAddresses';

// Connect to Ethereum provider
async function connectContract() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const nftContract = new ethers.Contract(NFT_ContractAddress, NFTMockABI, signer);

    return { signer, nftContract }
}

// Mint an NFT token to an address using safeMint function
export const safeMint = async (to) => {
    const { nftContract } = await connectContract()
    const tx = await nftContract.safeMint(to);
    await tx.wait();
};

// Mint an NFT token with a specific token ID to an address using mint function
export const mintWithTokenId = async (to, tokenId) => {
    const { nftContract } = await connectContract()
    const tx = await nftContract.mint(to, tokenId);
    await tx.wait();
};

//Approve of all
export const approveForAll = async (address) => {
    const { nftContract } = await connectContract()
    const tx = await nftContract.setApprovalForAll(address, "true");
    await tx.wait();
};
