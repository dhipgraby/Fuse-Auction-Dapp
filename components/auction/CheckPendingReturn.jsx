import React, { useState } from 'react';

const CheckPendingReturn = ({ auctionContract }) => {
  const [userAddress, setUserAddress] = useState('');
  const [pendings, setPendings] = useState('');

  const handleCheck = async () => {
    try {
      const funds = await auctionContract.checkPendingReturn(userAddress);
      setPendings(funds)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div>
      <p>Check Pending Native Returns</p>
      <input
        className='mt-1'
        type="text"
        placeholder="User Address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
      />
      <button className='blue-btn' onClick={handleCheck}>Check</button>
      {(pendings) && (
        <p>Pending Amount: {pendings}</p>
      )}
    </div>
  );
};

export default CheckPendingReturn;
