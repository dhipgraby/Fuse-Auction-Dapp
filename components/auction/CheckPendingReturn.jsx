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
      <h2>Check Pending Return</h2>
      <input
        type="text"
        placeholder="User Address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
      />
      <button onClick={handleCheck}>Check</button>
      {(pendings) && (
        <p>Pending Amount: {pendings}</p>
      )}
    </div>
  );
};

export default CheckPendingReturn;
