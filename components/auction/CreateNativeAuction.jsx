import React, { useState } from 'react';

const CreateNativeAuction = ({
  auctionContract
}) => {
  const [itemId, setItemId] = useState('');
  const [biddingTime, setBiddingTime] = useState('');
  const [minimumBid, setMinimumBid] = useState('');
  const [nftContract, setNftContract] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auctionContract.createNativeAuction(itemId, biddingTime, minimumBid, nftContract);
    } catch (error) {
      console.error(error)
    }
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
      <br />
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
      <button className="primary-btn" type="submit">Create Auction</button>
    </form>

  );
};

export default CreateNativeAuction;
