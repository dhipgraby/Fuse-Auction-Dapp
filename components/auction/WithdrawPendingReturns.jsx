import React from 'react';

const WithdrawPendingReturns = ({
  auctionContract
}) => {
  const handleWithdraw = async () => {
    try {
      await auctionContract.withdrawPendingReturns();
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div>
      <h2>Withdraw Pending Returns</h2>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default WithdrawPendingReturns;
