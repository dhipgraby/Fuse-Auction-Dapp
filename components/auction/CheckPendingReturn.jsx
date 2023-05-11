import React, { useState } from 'react';
import { checkPendingReturn } from '../../hooks/contracts/FuseAuction';

const CheckPendingReturn = () => {
  const [userAddress, setUserAddress] = useState('');
  const [pendings, setPendings] = useState('');

  const handleCheck = async () => {
    const funds = await checkPendingReturn(userAddress);
    setPendings(funds)
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
