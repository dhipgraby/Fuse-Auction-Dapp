import { ethers } from 'ethers';
import GLDTokenABI from './GLDTokenABI.json';
import { GLDTokenAddress } from './ContractAddresses';

class GLDToken {
  constructor() {
    this.tokenContract = null;
  }

  async connect() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    this.tokenContract = new ethers.Contract(GLDTokenAddress, GLDTokenABI, signer);
  }

  async getBalance(account) {
    if (!this.tokenContract) await this.connect();
    const balance = await this.tokenContract.balanceOf(account);
    return balance;
  }

  async approveForAll(tokenAddress, spender) {
    if (!this.tokenContract) await this.connect();
    const tx = await this.tokenContract.approveForAll(tokenAddress, spender);
    await tx.wait();
  }

  async approve(account, amount) {
    if (!this.tokenContract) await this.connect();
    const tx = await this.tokenContract.approve(account, amount);
    await tx.wait();
  }

  async mintTokens(account, amount) {
    if (!this.tokenContract) await this.connect();
    const tx = await this.tokenContract.transfer(account, amount);
    await tx.wait();
  }

  async accountAllowance(owner, address) {
    if (!this.tokenContract) await this.connect();
    const allowance = await this.tokenContract.allowance(owner, address);
    return ethers.utils.formatEther(allowance.toString());
  }
}

export default GLDToken;
