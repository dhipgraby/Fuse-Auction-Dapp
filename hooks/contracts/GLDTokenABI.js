import { ethers } from 'ethers';
import GLDTokenABI from './GLDTokenABI.json';

const GLDTokenAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

// Connect to Ethereum provider
export const connectToEthereum = async () => {
  if (window.ethereum) {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return provider;
  } else {
    throw new Error('No Ethereum provider found');
  }
};

// Get the GLDToken contract instance
export const getGLDTokenContract = async (provider, contractAddress) => {
  const signer = provider.getSigner();
  const GLDTokenContract = new ethers.Contract(
    GLDTokenAddress,
    GLDTokenABI,
    signer
  );
  return GLDTokenContract;
};

// Get the balance of an account
export const getBalance = async (contract, account) => {
  const balance = await contract.balanceOf(account);
  return balance;
};

// Mint tokens to an address
export const mintTokens = async (contract, to, amount) => {
  const tx = await contract.mint(to, amount);
  await tx.wait();
};

// Approve a spender for an ERC20 token
export const approveForAll = async (contract, tokenAddress, spender) => {
  const tx = await contract.approveForAll(tokenAddress, spender);
  await tx.wait();
};
