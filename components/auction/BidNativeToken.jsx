import React, { useState } from 'react';
import { bid } from './path/to/your/contract/functions';

const BidNativeToken = () => {
  const [auctionId, setAuctionId] = useState('');
  const [bidAmount, setBidAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await bid(auctionId, bidAmount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Bid Native Token</h2>
      <input
        type="text"
        placeholder="Auction ID"
        value={auctionId}
        onChange={(e) => setAuctionId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bid Amount"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
      />
      <button type="submit">Bid</button>
    </form>
  );
};

export default BidNativeToken;
