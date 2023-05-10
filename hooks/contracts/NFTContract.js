import { ethers } from 'ethers';
import NFTMockABI from './NFTMock.json';

const NFT_ContractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'

// Connect to Ethereum provider
const connectToEthereum = async () => {
    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        return provider;
    } else {
        throw new Error('No Ethereum provider found');
    }
};

// Get the NFTMock contract instance
const getNFTMockContract = async (provider, contractAddress) => {
    const signer = provider.getSigner();
    const NFTMockContract = new ethers.Contract(
        NFT_ContractAddress,
        NFTMockABI,
        signer
    );
    return NFTMockContract;
};

// Mint an NFT token to an address using safeMint function
const safeMint = async (contract, to) => {
    const tx = await contract.safeMint(to);
    await tx.wait();
};

// Mint an NFT token with a specific token ID to an address using mint function
const mintWithTokenId = async (contract, to, tokenId) => {
    const tx = await contract.mint(to, tokenId);
    await tx.wait();
};
