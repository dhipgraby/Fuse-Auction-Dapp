import React, { useState } from 'react';
import { bidERC20 } from '../../hooks/contracts/FuseAuction';


const BidERC20Token = () => {
  const [auctionId, setAuctionId] = useState('');
  const [bidAmount, setBidAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await bidERC20(auctionId, bidAmount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Bid ERC20 Token</h2>
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
      <button className='success-btn' type="submit">Bid</button>
    </form>
  );
};

export default BidERC20Token;
