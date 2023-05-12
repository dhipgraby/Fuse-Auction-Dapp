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
    <div className='mt-2 border-light'>
      <p>Withdraw Pending Funds</p>
      <input
        type="text"
        placeholder="Auction ID"
        value={auctionId}
        onChange={(e) => setAuctionId(e.target.value)}
      />
      <button className='primary-btn' onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default WithdrawPendingFunds;
