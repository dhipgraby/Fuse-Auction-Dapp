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
      <p>Withdraw Pending Returns Native token</p>
      <button className='primary-btn mt-1' onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default WithdrawPendingReturns;
