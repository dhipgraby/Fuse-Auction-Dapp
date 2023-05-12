import React, { useState } from 'react';

const WithdrawPendingFunds = ({
  auctionContract
}) => {
  const [auctionId, setAuctionId] = useState('');

  const handleWithdraw = async () => {
    try {
      await auctionContract.withdrawPendingFunds(auctionId);
    } catch (error) {
      console.error(error)
    }    
  };

  return (
    <div>
      <h2>Withdraw Pending Funds</h2>
      <input
        type="text"
        placeholder="Auction ID"
        value={auctionId}
        onChange={(e) => setAuctionId(e.target.value)}
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default WithdrawPendingFunds;
