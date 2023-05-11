import React, { useState } from "react";
import {
  connectToEthereum,
  getGLDTokenContract,
  getBalance,
  mintTokens,
  approveForAll,
  approve,
  accountAllowance
} from "../../hooks/contracts/GLDToken";
import { GLDTokenAddress } from "../../hooks/contracts/ContractAddresses";

const TokenInterface = () => {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [amountToApprove, setAmountToApprove] = useState("");
  const [balance, setBalance] = useState("");
  const [accountToApprove, setAccountToApprove] = useState("")
  const [allowanceAddr, setAllowanceAddr] = useState("")
  const [ownerAddr, setOwnerAddr] = useState("")
  const [allowance, setAllowance] = useState("");

  const handleGetBalance = async () => {
    const provider = await connectToEthereum();
    const contract = await getGLDTokenContract(provider);
    const balance = await getBalance(contract, account);
    setBalance(balance.toString())
  };

  const handleMintTokens = async () => {
    const provider = await connectToEthereum();
    const contract = await getGLDTokenContract(provider);
    await mintTokens(contract, account, amount);
  };

  const handleApproveForAll = async () => {
    const provider = await connectToEthereum();
    const contract = await getGLDTokenContract(provider);
    await approveForAll(contract, "0xTokenAddress", account);
  };

  const handleApprove = async () => {
    const provider = await connectToEthereum();
    const contract = await getGLDTokenContract(provider);
    await approve(contract, accountToApprove, amountToApprove);
  };

  const handleGetAllowance = async () => {
    const provider = await connectToEthereum();
    const contract = await getGLDTokenContract(provider);
    const checkallowance = await accountAllowance(contract, ownerAddr, allowanceAddr);
    setAllowance(checkallowance)
  };


  return (
    <div>
      <h1>ERC20 Contract</h1>
      <p className="mb-2">Contract Address: <span className="badge-dark">{GLDTokenAddress}</span> </p>
      {/* Add your UI components and event handlers here */}
      <input
        type="text"
        placeholder="Account Address"
        onChange={(e) => setAccount(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleMintTokens}>Mint Tokens</button>
      <small>Transfer from owner</small>
      <br />
      {/* APPROVE */}
      <input
        type="text"
        placeholder="Account Address"
        onChange={(e) => setAccountToApprove(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmountToApprove(e.target.value)}
      />
      <button onClick={handleApprove}>Approve</button>
      <br />

      {/* ALLAWANCE */}
      <input
        type="text"
        placeholder="Owner"
        onChange={(e) => setOwnerAddr(e.target.value)}
      />

      <input
        type="text"
        placeholder="Account"
        onChange={(e) => setAllowanceAddr(e.target.value)}
      />
      <button onClick={handleGetAllowance}>Check Allowance</button>
      <br />

      <button onClick={handleGetBalance}>Get Balance</button>
      <p>Balance: {balance}</p>
      <br />
      <p>Allowance: {allowance}</p>


    </div>
  );
};

export default TokenInterface;
