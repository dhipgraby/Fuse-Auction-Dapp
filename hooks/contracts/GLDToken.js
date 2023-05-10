import { ethers } from 'ethers';
import GLDTokenABI from './GLDTokenABI.json';
import { GLDTokenAddress } from './ContractAddresses';

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
export const getGLDTokenContract = async (provider) => {
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

// Approve a spender for an ERC20 token
export const approveForAll = async (contract, tokenAddress, spender) => {
  const tx = await contract.approveForAll(tokenAddress, spender);
  await tx.wait();
};

// Approve a spender for an ERC20 token
export const approve = async (contract, account, amount) => {
  const tx = await contract.approve(account, amount);
  await tx.wait();
};

// Mint tokens to an address
// Approve a spender for an ERC20 token
export const mintTokens = async (contract, account, amount) => {
  const tx = await contract.transfer(account, amount);
  await tx.wait();
};

// CHECK ALLOWANCE
export const accountAllowance = async (contract, owner, address) => {
  const allowance = await contract.allowance(owner, address);
  return allowance.toString()
};
