import React, { useState } from 'react';
import { checkPendingReturn } from './path/to/your/contract/functions';

const CheckPendingReturn = () => {
  const [userAddress, setUserAddress] = useState('');

  const handleCheck = async () => {
    await checkPendingReturn(userAddress);
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
    </div>
  );
};

export default CheckPendingReturn;
