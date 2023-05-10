import React, { useState } from 'react';
import { createNativeAuction } from '../../hooks/contracts/FuseAuction';

const CreateNativeAuction = () => {
  const [itemId, setItemId] = useState('');
  const [biddingTime, setBiddingTime] = useState('');
  const [minimumBid, setMinimumBid] = useState('');
  const [nftContract, setNftContract] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNativeAuction(itemId, biddingTime, minimumBid, nftContract);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Native Auction</h2>
      <input
        type="text"
        placeholder="Item ID"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bidding Time"
        value={biddingTime}
        onChange={(e) => setBiddingTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Minimum Bid"
        value={minimumBid}
        onChange={(e) => setMinimumBid(e.target.value)}
      />
      <input
        type="text"
        placeholder="NFT Contract Address"
        value={nftContract}
        onChange={(e) => setNftContract(e.target.value)}
      />
      <button type="submit">Create Auction</button>
    </form>
  );
};

export default CreateNativeAuction;
