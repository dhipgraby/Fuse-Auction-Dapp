import React from 'react';
import { withdrawPendingReturns } from '../../hooks/contracts/FuseAuction';


const WithdrawPendingReturns = () => {
  const handleWithdraw = async () => {
    await withdrawPendingReturns();
  };

  return (
    <div>
      <h2>Withdraw Pending Returns</h2>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default WithdrawPendingReturns;
